// initialise ScrollMagic controller
var controller = new ScrollMagic.Controller();

// create Tween
var tween = TweenMax.to("#js-animation", 1.0, {
	backgroundPosition: "100% 0",
	ease: SteppedEase.config(19)
});

// build scene
var scene = new ScrollMagic.Scene({duration: 2500})
	.triggerHook("onEnter")
	.setPin('#js-pinned')
	.setTween(tween)
	.addTo(controller);
