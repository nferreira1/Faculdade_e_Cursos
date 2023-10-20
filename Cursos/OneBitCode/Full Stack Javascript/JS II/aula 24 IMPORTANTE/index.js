document.getElementById('sessionBtn').addEventListener('click', function () {
	const input = document.getElementById('session')

	sessionStorage.setItem('info', input.value)
	input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
	const info = sessionStorage.getItem('info')
	alert('A informação salva é ' + info)
})



document.getElementById('localBtn').addEventListener('click', function () {
	const input = document.getElementById('local')

	localStorage.setItem('text', input.value)
	input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
	const text = localStorage.getItem('text')
	alert('O texto no local Storage salvo é ' + text)
})



document.getElementById('cookieBtn').addEventListener('click', function () {
	const input = document.getElementById('cookie')
	// cookieName=value; expires=UTCStringDate; path=/;

	const cookie = 'info=' + input.value + ';'
	const expiration = 'expires=' + new Date(2023, 4, 31) + ';'
	const path = 'path=/'

	input.value = ''

	document.cookie = cookie + expiration + path
	console.log(document.cookie)
})



document.getElementById('cookie2Btn').addEventListener('click', function () {
	const input = document.getElementById('cookie2')
	// cookieName=value; expires=UTCStringDate; path=/;

	const cookie = 'text=' + input.value + ';'
	const expiration = 'expires=' + new Date(2023, 5, 31) + ';'
	const path = 'path=/'

	input.value = ''

	document.cookie = cookie + expiration + path
	console.log(document.cookie)
})
