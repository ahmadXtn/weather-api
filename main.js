if ('serviceWorker' in  navigator) {
	navigator.serviceWorker.register('sw.js').then(registration => {
		console.log('w register');
	}).catch(error => {
		console.log('sw Registration Failed!');
	})

}

const api={
	apiKey:'c23574965d940387acf0d15db532efee',
	apiEndPoint:'http://api.openweathermap.org/'
}
