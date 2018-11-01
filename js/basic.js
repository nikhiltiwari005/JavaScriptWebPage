/*
*	A JavaScript DOM Web Page
*/


setTimeout(function(){


	const APPNAME = 'A JavaScript DOM Web Page';

	var head = document.getElementsByTagName('head')[0];
	var body = document.getElementsByTagName('body')[0];


	var websiteBgColor = (localStorage.websiteBg) ? localStorage.websiteBg : '#eee';


	metaCharset = document.createElement('meta');
	metaCharset.setAttribute('charset', 'UTF-8');
	head.prepend(metaCharset);


	metaView = document.createElement('meta');
	metaView.setAttribute('name', 'viewport');
	metaView.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
	head.append(metaView);


	title = document.createElement('title');
	title.innerHTML = 'A Pure JavaScript WebPage';
	head.append(title);


	// link = document.createElement('link');
	// link.rel = 'stylesheet';
	// link.href = '//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';
	// head.append(link);


	link = document.createElement('link');
	link.rel = 'dns-prefetch';
	link.href = '//bootstrapcdn.com';
	head.append(link);


	style = document.createElement('style');
	style.innerHTML = `body{background-color:${websiteBgColor};}`;
	style.type = 'text/css';
	head.append(style);


	headingOne = document.createElement('h1');
	headingOne.innerHTML = 'Heading One';
	headingOne.style.display = 'inline';
	body.append(headingOne);


	dateTime = document.createElement('span');
	dateTime.id = 'date';
	dateTime.style = 'color:grey';
	dateTime.style.backgroundColor = 'white';
	dateTime.style.float = 'right';
	body.append(dateTime);

	setInterval( function () {
		var dt = new Date;
		dateTimeUpdate = document.getElementById('date');
		dateTimeUpdate.innerHTML = dt;
	}, 1000);


	para = window.document.createElement('p');
	para.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	para.innerHTML += 'Extra info';
	body.append(para);


	image = document.createElement('img');
	image.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
	image.border = '1px solid black';
	image.setAttribute('width', '100%');
	if (window.innerWidth > 678 )
		image.style.width = '40%'; // this also works
	image.style.textAlign = 'center';
	body.append(image);
	

	if (!getCookie('name') || getCookie('name') == 'null') {
		promptInput = prompt('Your Name Please?', "");
		toStoreInCookie = 'name=' + promptInput;
		document.cookie = toStoreInCookie;
	};
	name = getCookie('name') ? getCookie('name') : 'Guest';
	headingOneUpdated = document.getElementsByTagName('h1')[0]; 
	headingOneUpdated.innerHTML = 'Hello ' + name;


	colorInput = document.createElement('input');
	colorInput.type = 'color';
	colorInput.name = 'colorName';
	colorInput.style.display = 'block';
	colorInput.id = 'colorNameId';
	body.append(colorInput);

	document.getElementById('colorNameId').onchange = function(){
		localStorage.websiteBg = this.value;
		style = document.getElementsByTagName('style')[0];
		style.innerHTML = `body{background-color:${this.value};}`;
	};




}, 0);