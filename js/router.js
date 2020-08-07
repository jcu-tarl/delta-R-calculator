page.base('/delta-R-calculator');
page('/about', about);
page('/', get_coords_and_calculate);
page('*', not_found);
page(get_coords_and_calculate);
page();

var loaded = '';

get_coords();

// TODO: have the JS get the values?
function calculate_deltaR() {
    calculate(document.getElementById('latitude').value, document.getElementById('longitude').value,
        document.getElementById('d13C').value, document.getElementById('d180').value);
}

calculate_deltaR();

async function get_coords_and_calculate(x) {
    if (loaded !== 'calculator') {
        document.getElementsByClassName('container')[0].innerHTML = await (await fetch('pages/calculator.html')).text();
        loaded = 'calculator';
    }

    console.log(x);
    var y = document.getElementById('img-ismap');
    console.log(y);

    try {
        get_coords();
        calculate_deltaR();
    } catch (e) {
        console.log("caught exception");
    }
}

async function about() {
    if (loaded !== 'about') {
        document.getElementsByClassName('container')[0].innerHTML = await (await fetch('pages/about.html')).text();
        loaded = 'about';
    }
    console.log("in about");
}

function not_found() {
    if (loaded !== 'not-found') {
        document.getElementsByClassName('container')[0].innerHTML = "<h1>Page not Found</h1>";
        loaded = 'not-found';
    }
}
