hero_txt = document.querySelector("#hero__main-text");
hero_upper = document.querySelector(".hero__upper");
hero_lower = document.querySelector(".hero__lower");
hero_left_txt = document.querySelector(".hero__left-text");
hero_right_txt = document.querySelector(".hero__right-text");

gsap.to("#hero__bg", {
  scrollTrigger: {
    scrub: 0.8,
  },
  scale: 1.5,
});

gsap.to("#hero__man", {
  scrollTrigger: {
    scrub: 0.8,
  },
  scale: 0.5,
});

gsap.to("#hero__mount-left", {
  scrollTrigger: {
    scrub: 0.8,
  },
  xPercent: -2009,
});

gsap.to("#hero__mount-right", {
  scrollTrigger: {
    scrub: 0.8,
  },
  xPercent: 200,
});

gsap.to("#hero__mount-left", {
  scrollTrigger: {
    scrub: 0.8,
  },
  xPercent: -200,
});

gsap.to("#hero__clouds1", {
  scrollTrigger: {
    scrub: 0.8,
  },
  xPercent: 150,
});

gsap.to("#hero__clouds2", {
  scrollTrigger: {
    scrub: 0.8,
  },
  xPercent: -150,
});

hero_tl = gsap.timeline({
  scrollTrigger: {
    scrub: 0.8,

    trigger: hero_lower,
    start:
      "bottom " + (hero_upper.offsetHeight + hero_lower.offsetHeight) + "px",
    end: "bottom bottom",
  },
});

hero_tl.fromTo(
  "#hero__main-text",
  {
    y: hero_upper.offsetHeight / 2 - hero_txt.offsetHeight / 2,
    x: hero_upper.offsetWidth / 2 - hero_txt.offsetWidth / 2,
    color: "white",
  },
  {
    y:
      hero_upper.offsetHeight +
      hero_lower.offsetHeight / 2 -
      (hero_txt.offsetHeight + (10 / 100) * hero_txt.offsetHeight),
    color: "black",
    duration: 2,
    rotateZ: 2
  }
);

hero_tl.fromTo(hero_left_txt, {
	x: -(hero_left_txt.offsetWidth),
	y: hero_upper.offsetWidth + (hero_lower.offsetWidth / 2) + 16
}, {
  duration: 1.5,
  color: "black",
  x: (hero_lower.offsetWidth / 2) - (16 / 100) * hero_left_txt.offsetWidth - hero_left_txt.offsetWidth,
  rotate: -3
}, "<50%");

hero_tl.fromTo(hero_right_txt, {
	x: -(hero_right_txt.offsetWidth),
	y: hero_upper.offsetWidth + (hero_lower.offsetWidth / 2) + 16
}, {
  duration: 1.8,
  color: "black",
  x: (hero_lower.offsetWidth / 2) + (13 / 100) * hero_right_txt.offsetWidth,
  rotate: 4
}, "<50%");
