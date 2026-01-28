gsap.to("#page1_content #title",{
    scaleX:100,
    duration:3,
    scrollTrigger:{
        trigger:"#page1_content",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 30%",
        scrub:2,
    }

})
// gsap.from("#page1_content #title",{
//     duration:1,
//     transform:"translateX(-1000px)"
// })