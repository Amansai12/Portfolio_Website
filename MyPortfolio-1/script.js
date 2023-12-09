
let change = document.querySelector("#change-text");

const typed = new Typed('#change-text', {
  strings: ['Frontend Developer', 'Heavy Coder','Software Developer','Content Creator'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  cursorChar:'_',
});

let openicon = document.querySelector("#open-icon");
let navbar = document.querySelector("nav");

openicon.addEventListener("click", () => {
    navbar.classList.toggle("activate");
    openicon.classList.toggle("fa-bars");
    openicon.classList.toggle("fa-xmark");
});

let dark = document.querySelectorAll(".dark-mode");
dark.forEach((ele) => {
    ele.onclick = () =>{
        ele.classList.toggle("fa-moon");
        ele.classList.toggle("fa-sun");
        document.body.classList.toggle("dark-theme")
    }
})


let home_cont = document.querySelectorAll(".home-content");
let home_img = document.querySelectorAll(".home-image");
let navi = document.querySelectorAll(".navigation");
let about_img = document.querySelectorAll(".about-image");
let about_cont = document.querySelectorAll(".about-content");

let t1 = gsap.timeline();
gsap.from(navi,{
    y:-40,
    duration:0.5
})
gsap.from(home_cont,{
    x:-80,
    opacity:0,
    duration:0.8,
})
gsap.from(home_img,{
    x:80,
    opacity:0,
    duration:0.8,
    // delay:0.5
})

gsap.from(about_img,{
    x:-400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        // markers:true,
        trigger:"#about",
        scrub:1,
        start:"-40% 10%",
        end:"20% top",
    }
})
gsap.from(".exp",{
    y:-400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#about",
        scrub:1,
        start:"-40% 10%",
        end:"20% top",
    }
})

gsap.from(".about-bottom",{
    x:400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#about",
        scrub:1,
        start:"-40% 10%",
        end:"20% top",
    }
})
gsap.from("#project-box-id",{
    y:-500,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#projects",
        start:"-10% 10%",
        end:"-60% 20%",
        scrub:1,
    }
})
gsap.from("#pb-1",{
    x:-600,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#pb-1",
        start:"-20% 50%",
        end:"40% 40%",
        scrub:1,
    }
})
gsap.from("#pb-2",{
    y:600,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#pb-2",
        start:"-180% 50%",
        end:"-60% 60%",
        scrub:1,
    }
})
gsap.from("#pb-3",{
    x:600,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#pb-3",
        start:"-20% 50%",
        end:"40% 40%",
        scrub:1,
    }
})
gsap.from("#b1",{
    x:-400,
    y:400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#skills",
        scrub:1,
        start:"-30% 10%",
        end:"20% 30%",
    }
})
gsap.from("#b2",{
    x:400,
    y:400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#b2",
        scrub:2,
        start:"-200% 10%",
        end:"-110% 30%",
    }
})
gsap.from(".myskills-h3",{
    y:-400,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#skills",
        scrub:1,
        start:"-30% 10%",
        end:"30% 30%",
    }
})




