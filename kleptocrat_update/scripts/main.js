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

let card_el = document.getElementById("CardModal");
let card_h3 = document.querySelector(".card__header>h3");
let card_h4 = document.querySelector(".card__body>h4");
let card_p = document.querySelector(".card__body>p");
let card_front = document.querySelector(".card__face--front");
let card_back = document.querySelector(".card__face--back");


let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    card_front.style["background-image"]="url('images/" + this.getAttribute("data-front") + "')";
    card_h3.innerHTML = this.getAttribute("data-h3");
    card_h4.innerHTML = this.getAttribute("data-h4");
    card_p.innerHTML = this.getAttribute("data-p");
    card_back.style["background-color"]="var(--" + this.getAttribute("data-h3").toLowerCase()+")";
  });
}
