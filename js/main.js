const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	navigation: {
	  nextEl: '.swiper-button-prev',
	  prevEl: '.swiper-button-next',
	},
	pagination: {
	el: '.swiper-pagination',
		clickable:true,
		dynamicBullets: true,
	},
	//slidesPerView: 5,
	//spaceBetween: 59,		

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992 :{
			slidesPerView: 4,
			spaceBetween: 29,
		}
	},
});
