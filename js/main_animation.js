gsap.to("#page1_content #title",{
    // transform:"translateX(2048px)",
    z:100,
    duration:1,
    opacity:0,
    scale:10,
    scrollTrigger:{
        trigger:"#page1_content #title",
        scroller:"body",
        markers:true,
        start:"top 25%",
        end:"top 5%",
        scrub:2,
    }
})
gsap.to("#page1_content #sub_title",{
    duration:.5,
    opacity:0,
    // transform:"translateX(-1000px)"]
    scrollTrigger:{
        trigger:"#page1_content #sub_title",
        scroller:"body",
        marker:true,
        start:"top 25%",
        end:"top 20%",
        scrub:2,
    }
})