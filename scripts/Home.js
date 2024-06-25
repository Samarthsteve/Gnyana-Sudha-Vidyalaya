gsap.to("#hero__bg", {
				scrollTrigger: {
								scrub: 0.5
				},
				scale: 1.5
});

gsap.to("#hero__man", {
				scrollTrigger: {
								scrub: 0.5
				},
				scale: 0.5
});

gsap.to("#hero__mount-left", {
				scrollTrigger: {
								scrub: 0.5
				},
				xPercent: -100
});

gsap.to("#hero__mount-right", {
				scrollTrigger: {
								scrub: 0.5
				},
				xPercent: 100
});

gsap.to("#hero__clouds1", {
				scrollTrigger: {
								scrub: 0.5
				},
				xPercent: 50
});

gsap.to("#hero__clouds2", {
				scrollTrigger: {
								scrub: 0.5
				},
				xPercent: -50
});

// gsap.to("#hero__main-text", {
// 				scrollTrigger: {
// 								scrub: 0.5
// 				},
// 				yPercent: 550
// });



gsap.fromTo("#hero__main-text", 
						{
						yPercent: 180,
							xPercent: 10,
							
}, {
							duration: 1,
							
							y: "75vh",
							delay: 5
							
})
