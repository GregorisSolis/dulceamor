document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel')

	M.Carousel.init(elementosCarousel, {
		duration: 150,
		numVisible: 3,
		indicators: true,
		noWrap: true
	})
})