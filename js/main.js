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
  xPercent:15,
  scrollTrigger:{
    trigger:"#scrollingText",
    scrub:1
  }
});

let tl2 = gsap.timeline();
tl2.to("#scrollingText", {
  x:1000,
  duration:50,
  repeat:-1,
  ease:'linear'
});

let tl3 = gsap.timeline();
tl3.from('.home-head',{
    scale: 0.5,
    duration:1,
    autoAlpha: 0

});
let tl4 = gsap.timeline();
  tl4.from('.section2',{
    opacity:0.6,
    scrollTrigger:{
      trigger:'.section2',
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
  tl6.from('.section3-before',{
    scale:0,
    scrollTrigger:{
      trigger:'.section3-before',
      scrub:true
      }
    })
   
  let tl7 = gsap.timeline();
  tl7.from('.sec-afh',{
    scale:0,
    scrollTrigger:{
      trigger:'.sec-afh',
      scrub:true
      }
    })
    let tl8 = gsap.timeline();
  tl8.from('.section4-after',{
    xPercent:15,
    scrollTrigger:{
      trigger:'.section4-after',
      scrub:1
      }
    })  
 let tl9 = gsap.timeline();
  tl9.from('.sub-head',{
    xPercent:-30,
    scrollTrigger:{
      trigger:'.sub-head',
      scrub:1
      }
    }) 
  let tl10 = gsap.timeline();
  tl10 .from('.sub-head2',{
    xPercent:-30,
    scrollTrigger:{
      trigger:'.sub-head2',
      scrub:1
      }
    })
  let tl11 = gsap.timeline();
  tl11 .from('.section5-before',{
    xPercent:30,
    scrollTrigger:{
      trigger:'.section5-before',
      scrub:1
      }
      })
    
    let tl12 = gsap.timeline();
  tl12 .from('.sec5-head2',{
    xPercent:-30,
    scrollTrigger:{
      trigger:'.sec5-head2',
      scrub:1
      }
    })





























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