// document.cookie = "username=John Doe";
// document.cookie = "lastname=Jane Doe";

var getCookie = (key) => {
	a = [];
	x = document.cookie.split('; ');
	for (var i = x.length - 1; i >= 0; i--) {
		b = x[i].split('=');
		a[b[0]] = b[1];
	};
	return (key) ? a[key] : a;
};

function setCookie (name, value) {
	document.cookie = name + '=' + value;
	return getCookie();
}

// console.log(document.cookie);
// console.log(localStorage);
// console.log(sessionStorage);