gsap.registerPlugin(ScrollTrigger);
gsap.from(".title", {
    opacity: 0,
    duration:2
});
var tl = gsap.timeline();
gsap.from(".iphone", {
    scrollTrigger: {
        trigger: ".iphone",
        start: "top 90%",
        scrub: true,
        toggleActions: "restart pause reverse pause",
        end: "+=500"
    },
    opacity: 0,
    scale: 0.5,
    duration: 2
});
gsap.from(".p1", {
    scrollTrigger: {
        trigger: ".p1",
        start: "top 50%",
        scrub:true,
        toggleActions: "restart pause reverse pause",
        pin:true
    },
    opacity: 0,
    duration: 3
});
gsap.from(".p2", {
    scrollTrigger: {
        trigger: ".p2",
        start: "top center",
        end: "+=700",
        scrub:true,
        toggleActions: "restart pause reverse pause",
        pin:true
    },
    opacity: 0,
    duration: 3
});
