// FUNCTION

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Portfolio - Renato Albuquerque',
			text: 'Front-End Web Developer',
			url: 'https://portfolio-renatoalbuquerque.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}