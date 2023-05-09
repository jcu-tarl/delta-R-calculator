page('/', go_to_page);
page('/index.html', go_to_page);
page('*', not_found);
page(get_coords_and_calculate);
page();

var loaded = '';

proj4.defs("EPSG:3577","+proj=aea +lat_0=0 +lon_0=132 +lat_1=-18 +lat_2=-36 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");

function get_coords(xy){
    longlat = rowcol_to_longlat(xy[1],xy[2])
    document.getElementById('longitude').value = longlat[0].toFixed(6);
    document.getElementById('latitude').value = longlat[1].toFixed(6);
    console.log(xy[1],xy[2])
}

function updateResult(result){
    document.getElementById("result").innerHTML=""
            + "<div class='alert alert-success' role='alert'>&Delta;R: " + result +"</div>";
}

function calculate_deltaR(){
    var longitude = parseFloat(document.getElementById('longitude').value);
    var latitude = parseFloat(document.getElementById('latitude').value);
    // console.log(longitude, latitude);
	if(!latitude || !longitude){
		document.getElementById("result").innerHTML="<div class='alert alert-danger' role='alert'>You must select a point on the Australian coast</div>";
		return 0;
	}
    var dr = dr_from_longlat(longitude, latitude);
    updateResult(dr);
}

function calculate_query_param_deltaR() {
	const queryString = window.location.href;
	const re = /\?(\d+),(\d+)/;
	var xy = re.exec(queryString);
    get_coords(xy);
    dr = deltar(xy[1],xy[2]);
    updateResult(dr);
}

function dr_from_longlat(long, lat){
    en = proj4('EPSG:4326','EPSG:3577',[long, lat]);
    loc = en_to_colrow(en[0],en[1]);
    console.log(loc[0], loc[1]);
    return deltar(loc[0],loc[1]);
}

function deltar(x,y){
    var dr = 999, sigma = 999;
    if (x > 0 && x < dr_pos.cols && y > 0 && y < dr_pos.rows){
        dr = dr_vals[y][x];
        sigma = sigma_vals[y][x];
    }
	return dr == 999 ? "Out of bounds" : dr + "±" + sigma;
}

function go_to_page(ctx) {
    if (ctx.hash === 'about') {
        about();
    } else {
        get_coords_and_calculate(ctx);
    }
}

function about() {
    if (loaded !== 'about') {
        loaded = 'about';
        load_html_file('pages/about.html');
    }
}

function not_found() {
    if (loaded !== 'not-found') {
        loaded = 'not-found';
        get_container().innerHTML = "<h1>Page not Found</h1>";
    }
}

function load_html_file(file_name, do_after) {
    let container = get_container();
    fetch_html(file_name).then(html => {
        container.innerHTML = html;
        if (do_after !== undefined) {
            do_after()
        }
    });
}

function get_coords_and_calculate(ctx) {
    if (loaded !== 'calculator') {
        loaded = 'calculator';
        load_html_file('pages/calculator.html', calculate_query_param_deltaR);
    } else {
        calculate_query_param_deltaR();
    }
}

async function fetch_html(file_name) {
    return (await fetch(file_name)).text();
}

function get_container() {
    return document.getElementsByClassName('container')[0]
}
