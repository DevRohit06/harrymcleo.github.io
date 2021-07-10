function fetchData() {
	fetch('https://api.statcord.com/v3/844440284762079233').then(response => {
		return response.json();
	}).then(data => {
		console.log(data.data[0].servers);
		document.querySelector('#server-count').innerHTML = `<h1>${data.data[0].servers}+</h1>`
		console.log(data.data[0].users);
		document.querySelector('#user-count').innerHTML = `<h1>${data.data[0].users}+</h1>`
	}).catch(error => {
		console.log(error);
	});
}

fetchData();
