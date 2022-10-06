window.onload = async () => {
	const response = await fetch('/api/version');
	const version = await response.text();
	console.log(version);
	document.querySelector("#year").textContent = new Date().getFullYear();
	document.querySelector("#gh-btn").title = 'v' + '1.0.0' //version;
}
