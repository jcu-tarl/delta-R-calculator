page.base('/delta-R-calculator');
page('/', go_to_page);
page('*', not_found);
page(get_coords_and_calculate);
page();

var loaded = '';

function calculate_deltaR() {
    calculate(document.getElementById('latitude').value, document.getElementById('longitude').value,
        document.getElementById('d13C').value, document.getElementById('d18O').value);
}

function calculate_query_param_deltaR() {
    get_coords();
    calculate_deltaR();
}

function go_to_page(ctx) {
    if (ctx.hash === 'about') {
        about();
    } else {
        get_coords_and_calculate(ctx);
    }
}

function get_coords_and_calculate(ctx) {
    if (loaded !== 'calculator') {
        loaded = 'calculator';
        load_html_file('pages/calculator.html', calculate_query_param_deltaR);
    } else {
        calculate_query_param_deltaR();
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

async function fetch_html(file_name) {
    return (await fetch(file_name)).text();
}

function get_container() {
    return document.getElementsByClassName('container')[0]
}
