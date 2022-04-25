import _throttle from 'lodash/throttle'
const scrollReveal = function () {
	const reveal = document.querySelectorAll('.reveal')

	let scrollTop = window.scrollY || document.documentElement.scrollY
	console.log(scrollTop)
	reveal.forEach((element) => {
		const revealDelay = element.dataset.delay
		// if (scrollTop > element.parentElement.offsetTop - 500) {
		// 	element.classList.add('show')
		// }
		if (scrollTop > element.parentElement.offsetTop - 800) {
			if (revealDelay === undefined) {
				element.classList.add('show')
			} else {
				setTimeout(() => {
					element.classList.add('show')
				}, 500)
			}
		}
	})
}
window.addEventListener('scroll', _throttle(scrollReveal, 200))
