var matrices = {
	location_only: [
		[1211.08600840001,-2218.34228330484,-933.487765821524,-0.647003416570807,2482.73072278011,1.17217893389516,0.390623754195792,-1.10599573438475],
		[-2218.34228330484,6318.34001830126,2169.31360960935,1.1499638641502,-6749.02833261203,-3.36327466927597,-0.954385327109677,2.97404964291677],
		[-933.487765821524,2169.31360960935,1972.41779326781,0.445639739630569,-4335.90400678122,-1.09046023010947,-1.07444303729285,2.23208962660654],
		[-0.647003416570807,1.1499638641502,0.445639739630569,0.000352207222184,-1.23070980110238,-0.000611683267725,-0.000174904224294,0.000536371968211],
		[2482.73072278011,-6749.02833261203,-4335.90400678122,-1.23070980110238,13499.2687021274,3.41273396949467,2.25197332078252,-6.83796982988154],
		[1.17217893389516,-3.36327466927597,-1.09046023010947,-0.000611683267725,3.41273396949467,0.001802458966388,0.000467484067273,-0.001474447268237],
		[0.390623754195792,-0.954385327109677,-1.07444303729285,-0.000174904224294,2.25197332078252,0.000467484067273,0.000618822875464,-0.001205957175263],
		[-1.10599573438475,2.97404964291677,2.23208962660654,0.000536371968211,-6.83796982988154,-0.001474447268237,-0.001205957175263,0.003573910558673]
	],
	all: [
		[981.746320681057,-1799.00777985653,-751.699982100552,-0.52631898252278,4.4245676313026,-6.38548303216911,2001.60480400823,0.950657382324124,0.309333238666187,2.59598688356508,-0.889841805157058],
		[-1799.00777985653,5129.49105836786,1760.8469247796,0.935908112498154,-4.05968961542763,13.0479249911562,-5474.98114177408,-2.73045974440549,-0.76833939950704,-9.40780465605429,2.41008352291842],
		[-751.699982100552,1760.8469247796,1599.01922500913,0.357937605031346,2.89507786460931,6.00207704450118,-3512.82619633244,-0.886000141205728,-0.86840404905682,-3.07399577291466,1.80631654801621],
		[-0.52631898252278,0.935908112498154,0.357937605031346,0.000288142591652,-0.003588290409711,0.003465893307587,-0.993093007882562,-0.000497721790832,-0.000137326774083,-0.00201044231806,0.000431550462309],
		[4.4245676313026,-4.05968961542763,2.89507786460931,-0.003588290409711,3.35535393848761,-2.45590796054199,-4.97824166909393,0.002096898463509,-0.004345870940747,0.490421363594032,0.003278852432971],
		[-6.38548303216911,13.0479249911562,6.00207704450118,0.003465893307587,-2.45590796054199,10.4609657853674,-5.78232680742367,-0.00737071958503,0.004951151691126,-1.44326260097081,0.000866796719374],
		[2001.60480400823,-5474.98114177408,-3512.82619633244,-0.993093007882562,-4.97824166909393,-5.78232680742367,10926.9830263172,2.76986608164679,1.82569815993064,10.3799515539629,-5.53021481332582],
		[0.950657382324124,-2.73045974440549,-0.886000141205728,-0.000497721790832,0.002096898463509,-0.00737071958503,2.76986608164679,0.001463258605855,0.000376284963357,0.004959221608319,-0.001195558570567],
		[0.309333238666187,-0.76833939950704,-0.86840404905682,-0.000137326774083,-0.004345870940747,0.004951151691126,1.82569815993064,0.000376284963357,0.000505439272749,0.001005112197145,-0.000977710160642],
		[2.59598688356508,-9.40780465605429,-3.07399577291466,-0.00201044231806,0.490421363594032,-1.44326260097081,10.3799515539629,0.004959221608319,0.001005112197145,1.82851885950827,-0.004262469066506],
		[-0.889841805157058,2.41008352291842,1.80631654801621,0.000431550462309,0.003278852432971,0.000866796719374,-5.53021481332582,-0.001195558570567,-0.000977710160642,-0.004262469066506,0.002888151450451]
	],
	no_O18: [
		[1168.43336706348,-2134.49371084527,-892.653344400672,-0.625599497658406,3.31109576454014,2379.84628264449,1.12769006186996,0.371797349217477,-1.05938689090649],
		[-2134.49371084527,6078.57169073325,2086.41598391516,1.10664748002667,-0.345583120892346,-6491.97430626432,-3.23562589966545,-0.917745301087675,2.86068997124311],
		[-892.653344400672,2086.41598391516,1906.37673362868,0.423582522610511,5.40271366225969,-4185.46374269487,-1.04907377698235,-1.04019202475485,2.15493192722847],
		[-0.625599497658406,1.10664748002667,0.423582522610511,0.000341839366581,-0.003150864804106,-1.17576305695242,-0.000588467299196,-0.000164458781243,0.00051160661943],
		[3.31109576454014,-0.345583120892346,5.40271366225969,-0.003150864804106,3.30963255353157,-8.65178594912286,-3.38540431222316E-07,-0.003999018295501,0.00463016074057],
		[2379.84628264449,-6491.97430626432,-4185.46374269487,-1.17576305695242,-8.65178594912286,13009.538272571,3.28320895653536,2.17695651488757,-6.59054734971629],
		[1.12769006186996,-3.23562589966545,-1.04907377698235,-0.000588467299196,-3.38540431222316E-07,3.28320895653536,0.001734048970736,0.000449741724,-0.00141848700536],
		[0.371797349217477,-0.917745301087675,-1.04019202475485,-0.000164458781243,-0.003999018295501,2.17695651488757,0.000449741724,0.000600168255524,-0.001165781240751],
		[-1.05938689090649,2.86068997124311,2.15493192722847,0.00051160661943,0.00463016074057,-6.59054734971629,-0.00141848700536,-0.001165781240751,0.003444744985635]
	],
	no_C13: [
		[1209.32361723957,-2215.43896050571,-933.477538797826,-0.645724824012345,-2.41417200857575,2478.69067743881,1.17080017196234,0.38902563768071,-1.10395290057574],
		[-2215.43896050571,6309.42220351447,2169.40000007585,1.14767708511838,5.75793345409202,-6737.78715112365,-3.35888520897312,-0.950529643794625,2.96852518643086],
		[-933.477538797826,2169.40000007585,1974.11481987871,0.444703306691463,7.40521184733195,-4329.87383041141,-1.09109070917689,-1.06978106081952,2.22807462133192],
		[-0.645724824012345,1.14767708511838,0.444703306691463,0.000351524898764,-9.64229109998956E-05,-1.22829129584676,-0.000610460886336,-0.000174598484212,0.000535327337278],
		[-2.41417200857575,5.75793345409202,7.40521184733195,-9.64229109998956E-05,9.92816559196664,-3.19248093999342,-0.003681431984043,0.003455820467448,0.00042246571839],
		[2478.69067743881,-6737.78715112365,-4329.87383041141,-1.22829129584676,-3.19248093999342,13474.1075366402,3.40729727384583,2.24649338734155,-6.82484044521241],
		[1.17080017196234,-3.35888520897312,-1.09109070917689,-0.000610460886336,-0.003681431984043,3.40729727384583,0.001800327409489,0.000465295735588,-0.001471743586354],
		[0.38902563768071,-0.950529643794625,-1.06978106081952,-0.000174598484212,0.003455820467448,2.24649338734155,0.000465295735588,0.000618825308508,-0.00120347064119],
		[-1.10395290057574,2.96852518643086,2.22807462133192,0.000535327337278,0.00042246571839,-6.82484044521241,-0.001471743586354,-0.00120347064119,0.003566995373573]
	]
};

var coefficients = {
	location_only: [[
		83.50331,
		-240.5357,
		-194.39014,
		-0.02811,
		320.6077,
		0.08894,
		0.09842,
		-0.18071
	]],
	all: [[
		82.22061,
		-210.20784,
		-177.8127,
		-0.02673,
		4.76704,
		-2.39178,
		266.57559,
		0.07309,
		0.08389,
		-6.91369,
		-0.15567
	]],
	no_O18: [[
		88.3849,
		-241.0452,
		-186.42485,
		-0.03275,
		4.87943,
		307.85226,
		0.08894,
		0.09253,
		-0.17388
	]],
	no_C13: [[
		84.37862,
		-242.62338,
		-197.07508,
		-0.02807,
		-3.5997,
		321.76521,
		0.09027,
		0.09717,
		-0.18086
	]]
};

var coastal_coords = [[285,180],[318,144],[361,152],[387,121],[432,103],[478,109],[490,135],[499,169],[542,192],[578,186],[586,138],[601,92],[618,119],[645,154],[663,195],[685,234],[720,266],[752,299],[782,338],[797,383],[794,429],[775,473],[750,515],[729,560],[678,584],[636,571],[583,569],[549,533],[526,489],[492,503],[463,479],[417,455],[363,457],[308,467],[262,494],[204,494],[150,512],[121,484],[122,438],[103,394],[89,348],[95,301],[125,268],[174,253],[223,240],[248,198],[643,614],[705,617],[679,665],[638,77],[632,68],[126,255],[588,61],[653,642],[675,622],[542,145],[507,110],[551,98],[502,88],[394,92]];

function calculate(latitude, longitude, d13C, d18O){
	if(!latitude || !longitude){
		document.getElementById("result").innerHTML="<div class='alert alert-danger' role='alert'>You must select a point on the Australian coast</div>";
		return 0;
	}
	var coefs = [];
	var vcov = [];
	var predictors = [];
	const bfi = bearing(longitude, latitude);
	const sin_bfi = Math.sin(bfi);
	const cos_bfi = Math.cos(bfi);
	const dfi = distance(longitude, latitude);
	const sincos = sin_bfi * cos_bfi;
	const sindfi = sin_bfi * dfi;
	const cosdfi = cos_bfi * dfi;
	const CO = !d13C || !d18O ? null : d13C * d18O;
	const sincosdfi = sin_bfi * cos_bfi * dfi;

	switch(true){
		case !d13C && !!d18O: // d18O only
			predictors = [[1, sin_bfi, cos_bfi, dfi, d18O, sincos, sindfi, cosdfi, sincosdfi]];
			coefs = coefficients.no_C13;
			vcov = matrices.no_C13;
			break;
		case !!d13C && !d18O: // d13C only
			predictors = [[1, sin_bfi, cos_bfi, dfi, d13C, sincos, sindfi, cosdfi, sincosdfi]];
			coefs = coefficients.no_O18;
			vcov = matrices.no_O18;
			break;
		case !d13C && !d18O: // Location only
			predictors = [[1, sin_bfi, cos_bfi, dfi, sincos, sindfi, cosdfi, sincosdfi]];
			coefs = coefficients.location_only;
			vcov = matrices.location_only;
			break;
		default:
			predictors = [[1, sin_bfi, cos_bfi, dfi, d13C, d18O, sincos, sindfi, cosdfi, CO, sincosdfi]];
			coefs = coefficients.all;
			vcov = matrices.all;
	}
//	console.log(predictors);
//	console.log(coefs);
	const dR = MMult(predictors, transpose(coefs));
	const se = Math.sqrt(MMult(predictors, MMult(vcov, transpose(predictors))));
	document.getElementById("result").innerHTML=""
		+ "<div class='alert alert-success' role='alert'>&Delta;R: " + parseFloat(dR).toFixed(2) + "&nbsp;&nbsp;"
		+ "&epsilon;: " + parseFloat(se).toFixed(2) + "</div>";

}

function transpose(matrix) {
	return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function MMult (A, B) {
	var result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));

	return result.map((row, i) => {
		return row.map((val, j) => {
			return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0)
		})
	})
}

function distance(lon2, lat2){
	const lon1 = 134;
	const lat1 = -24;
	const R = 6371;
	const phi1 = lat1 * Math.PI/180; // phi, lambda in radians
	const phi2 = lat2 * Math.PI/180;
	const Deltaphi = (lat2-lat1) * Math.PI/180;
	const Deltalambda = (lon2-lon1) * Math.PI/180;

	const a = Math.sin(Deltaphi/2) * Math.sin(Deltaphi/2) +
		Math.cos(phi1) * Math.cos(phi2) *
		Math.sin(Deltalambda/2) * Math.sin(Deltalambda/2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	return R * c;
}

function bearing(lon2, lat2){
	lon2 = lon2 * Math.PI/180;
	lat2 = lat2 * Math.PI/180;
	const lon1 = 134 * Math.PI/180;
	const lat1 = -24 * Math.PI/180;
	const y = Math.sin(lon2-lon1) * Math.cos(lat2);
	const x = Math.cos(lat1)*Math.sin(lat2) -
		Math.sin(lat1)*Math.cos(lat2)*Math.cos(lon2-lon1);
	const Theta = Math.atan2(y, x);
	return (Theta + 2 * Math.PI) % (2 * Math.PI);
}

function get_coords(){
	const queryString = window.location;
	const re = /\?(\d+),(\d+)/;
	var xy = re.exec(queryString);
	if(!isCoastal([xy[1],xy[2]])){
		document.getElementById('longitude').value = '';
		document.getElementById('latitude').value = '';
	} else {
		const dX = 0.056355275878;
		const dY = -0.056406113854;
		const X = xy[1] * dX + 108.453169373447;
		const Y = xy[2] * dY - 6.075723287185;
		document.getElementById('longitude').value = X.toFixed(6);
		document.getElementById('latitude').value = Y.toFixed(6);
	}
}

function euclid(from,to){
	return Math.sqrt((from[0]-to[0])**2 + (from[1]-to[1])**2);
}

function isCoastal(point){
	var distances = coastal_coords.map(function(coord){return euclid(point, coord);});
	distances = distances.sort(function(a, b){return a-b});
	return distances[0] < 30 ? 1 : 0;
}
