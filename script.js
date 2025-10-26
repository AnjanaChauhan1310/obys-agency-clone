function lsA(){
 
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}



// function locoScroll(){
//     gsap.registerPlugin(ScrollTrigger);



// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);


// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
  
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }
// locoScroll();
// cursor & megnet



//loader Animation strat form here 
function loadingAnimation(){
    
     
    var tl = gsap.timeline()



 tl.from(".line h1",{

    //your web experiance mate
    // y:-100 upar thi nice ave 
    y: 150,
    stagger : 0.25,
    duration : 0.6,
    delay : 0.5
})

tl.from("#line1-part1",{
    opacity : 0.1,
    onStart : function(){
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function(){
        if(grow<100){
            // grow++
            h5timer.innerHTML = grow++
        }
        else{
            h5timer.innerHTML = grow
        }
        },33)

    }

})
tl.to(".line h2",{
    animationName : "anime",
    opacity : 1
})

 tl.to("#loader", {
    //first page ne gayab karva mate your web
    opacity : 0 ,
    duration : 0.4,
     delay :  4 

 })
 tl.from("#page1",{
    y : 1600,
    opacity : 0,
    delay : 0.2,
    duration : 0.6,
    ease : Power4
})
tl.to("#loader",{
    display : "none"
})

//for nav
tl.from("#nav",{
    opacity:0,
    y:-90
})

//page1 h1 animation 

// tl.from("#hero1 h3 , #page2",{
//     opacity:0
// })

tl.from("#hero1 h1, #hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2
})
tl.from("#hero1 , #page2",{
    opacity:0
},"-=1.5") // -=1.2

}
// loader animation complated here

function cursorAnimation(){

    Shery.mouseFollower({
        skew : true,
        ease : "cubic-bezier(0.23,1,0.320,1)",
        duration:1,
    });
    
    Shery.makeMagnet("#navc-part2 h4");
    //  we can write also this way 
    // megnet 
    // Shery.makeMagnet("#navc-part2 h4" /* Element to target.*/, {
    // //Parameters are optional.
    // //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // //   duration: 1,
    // });

    var videocontainer = document.querySelector("#video-container");
     var video = document.querySelector("#video-container video");
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity: 0
                // or display:"none"
            })
            gsap.to("#video-cursor",{
                left:dets.x - 570,
                y:dets.y  -300
            })
        })
    })

    videocontainer.addEventListener("mouseleave",function(){
        
        gsap.to(".mousefollower",{
                opacity: 1
                // or display:"initial"
            })
        gsap.to("#video-cursor",{
                left:"70%",
                top:"-15%"
            })
    })

    var flag = 0;
    videocontainer.addEventListener("click",function(){

        

        if(flag == 0){
            // gsap.to("#video-container video",{
            //     opacity:1
            // }) //one way

            video.play()
            video.style.opacity = 1

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-large-line"></i>`
            gsap.to("#video-cursor",{
            scale:0.5
            })
            flag = 1
        }
        else{
            video.pause()
            video.style.opacity = 0

            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-large-fill"></i>`
            gsap.to("#video-cursor",{
            scale:1
            })
            flag = 0

        }
        
    })
}


function megnet(){
     Shery.makeMagnet("#navc-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //   duration: 1,
    });
     Shery.makeMagnet("#nav svg"); 

}







// shery js effects animation
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
         style:5,
        // debug:true,// debug panel ma change karya pa6i remove kari copy pest config ma karo
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey:true
    })
}

function flag(){

    // document.addEventListener("mousemove",function(dets){
    // gsap.to("#flag",{
    //     x:dets.x,
    //     y:dets.y
    // })

    // })
    document.querySelector("#hero3").addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y,
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(dets){
        gsap.to("#flag",{
            opacity:0
        })
    })

}



lsA();
loadingAnimation();
cursorAnimation();
megnet();
sheryAnimation()
flag();



