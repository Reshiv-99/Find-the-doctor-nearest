// GSAP is a JavaScript library for building high-performance animations that work in **every** major browser. Animate CSS, SVG, canvas, React, Vue, WebGL, colors, strings, motion paths, generic objects...anything JavaScript can touch! No other library delivers such advanced sequencing, reliability, and tight control while solving real-world problems on millions of sites. GSAP works around countless browser inconsistencies; your animations **just work**. 


var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(move){
    blur.style.left = move.x-50+"px"
    blur.style.top = move.y-50+"px"
})


gsap.to("#nav",{
    backgroundColor : "black",
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -10%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    zIndex:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }

})
gsap.from("#cards-container",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
        
    }
})


