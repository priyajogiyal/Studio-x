//GSAP Register//

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let con_height = document.querySelector("#scroll-container");

let height;
function setHeight() {
  height = con_height.clientHeight;
  document.body.style.height = height + "px";
}
ScrollTrigger.addEventListener("refreshInit", setHeight);

// smooth scrolling container
gsap.to(con_height, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});

// Element Animation

let tl = gsap.timeline();
tl.to('#scrollingText', {
  xPercent: 50,
  scrollTrigger: {
    trigger: "#scrollingText",
    scrub: 1
  }
});

let tl2 = gsap.timeline();
tl2.from('.client-img',{
  scale:1.2,
  scrollTrigger:{
    trigger:'.client-img',
    scrub:true
    }
  })

let tl3 = gsap.timeline();
tl3.from('.home-head', {
  scale: 0.5,
  duration: 1,
  autoAlpha: 0

});
let tl5 = gsap.timeline();
tl5.from('.sec2-img',{
  scale:1.5,
  scrollTrigger:{
    trigger:'.sec2-img',
    scrub:true
    }
  })
// let tl5 = gsap.timeline();
// tl5.from('.section3',{
//   opacity:0,
//   scrollTrigger:{
//     trigger:'.section3',
//     scrub:true
//     }
//   })

let tl6 = gsap.timeline();
tl6.from('.section3-before', {
  scale: 0,
  scrollTrigger: {
    trigger: '.section3-before',
    scrub: true
  }
})

let tl7 = gsap.timeline();
tl7.from('.sec-afh', {
  scale: 0,
  scrollTrigger: {
    trigger: '.sec-afh',
    scrub: true
  }
})
let tl8 = gsap.timeline();
tl8.from('.section4-after', {
  xPercent: 15,
  scrollTrigger: {
    trigger: '.section4-after',
    scrub: 1
  }
})
let tl9 = gsap.timeline();
tl9.from('.sub-head', {
  xPercent: -30,
  scrollTrigger: {
    trigger: '.sub-head',
    scrub: 1
  }
})
let tl10 = gsap.timeline();
tl10.from('.sub-head2', {
  xPercent: -30,
  scrollTrigger: {
    trigger: '.sub-head2',
    scrub: 1
  }
})
let tl11 = gsap.timeline();
tl11.from('.section5-before', {
  xPercent: 30,
  scrollTrigger: {
    trigger: '.section5-before',
    scrub: 1
  }
})

let tl12 = gsap.timeline();
tl12.from('.sec5-head2', {
  xPercent: -30,
  scrollTrigger: {
    trigger: '.sec5-head2',
    scrub: 1
  }
})

//team animation
let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((tm_rvl) => {
  let image = tm_rvl.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: tm_rvl,
      // toggleActions: "restart none none reset"
      scrub:true
    }
  });

  tl.set(tm_rvl, { 
    autoAlpha: 1 
  });

  tl.from(tm_rvl, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });

  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

// images section //


let revealCon = document.querySelectorAll(".img_rvl");

revealCon.forEach((cl1) => {
  let image = cl1.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: cl1,
      scrub: true
    }
  });

  tl.set(cl1, { autoAlpha: 1 });
  tl.from(cl1, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});




















// let tl3 = gsap.timeline();
// tl3.from('.home-head',{
//     scale: 0.5,
//     duration:1,
//     autoAlpha: 0

// });

// // scrolltrigger for each box
// gsap.utils.toArray('.box').forEach(box => {
//   gsap.to(box, {
//     backgroundColor: '#ffffff',
//     scrollTrigger: {
//       trigger: box,
//       start: 'top center',
//       toggleActions: 'play none none reverse',
//       markers: true
//     }
//   });
// });


// function setupLinks(scroller) {
//   let linkElements = gsap.utils.toArray('.nav a'),
//       linkTargets = linkElements.map(e => document.querySelector(e.getAttribute("href"))),
//       linkPositions = [],
//       calculatePositions = () => {
//         let offset = gsap.getProperty(scroller, "y");
//         linkTargets.forEach((e, i) => linkPositions[i] = e.getBoundingClientRect().top - offset);
//       };

//   linkElements.forEach((element, i) => {

//     element.addEventListener("click", e => {
//       e.preventDefault();
//       gsap.to(window, {scrollTo: linkPositions[i], ease: "power4", overwrite: true});
//     });
//   });

//   ScrollTrigger.addEventListener("refresh", calculatePositions);
// }

// setupLinks(container);

