function laoding_animation() {
  var t1 = gsap.timeline();

  t1.from(".line h1", {
    y: 150,
    stagger: 0.4,
    duration: 0.5,
    delay: 0.3,
  });

  t1.from("#line-part1 h5,#line-part1 h6", {
    opacity: 0,
    onStart: function () {
      var h5 = document.querySelector("#line-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5.innerHTML = grow;
          grow++;
        } else {
          h5.innerHTML = grow;
        }
      }, 15);
    },
  });

  t1.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  t1.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 1,
    onComplete: () => {
      t1.to("#loader", {
        display: "none",
      });
    },
  });

  t1.from("#page1", {
    y: 1200,
    // delay:0.2,
    opacity: 0,
    // ease:power3,
    // duration:0.5,
  });

  t1.from("#nav", {
    opacity: 0,
    duration0: 0.2,
  });

  t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 150,
    stagger: 0.2,
  });
}

laoding_animation();

function crsr_animation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
   
  });

  var videoContainer=document.querySelector("#vid")
  var video=document.querySelector("video")
  var vidcrsr= document.querySelector("#video-crsr")
  videoContainer.addEventListener("mouseenter",function(){
    gsap.to("#crsr",{
      scale:0
  })
    videoContainer.addEventListener("mousemove",function(dets){
        
        gsap.to("#video-crsr",{
          scale: 1,
            left:dets.x - 55,
            top:dets.y - 55
        })
       })
    })
    var flag = 0
       videoContainer.addEventListener("click",function(){
        if (flag==0){
        video.play()
        video.style.opacity = 1
        vidcrsr.innerHTML = `<i class="ri-pause-fill"></i>`
        gsap.to("#video-crsr",{
          scale:0.5
        })
        gsap.to("#vid img", {
          opacity: 0
        })
        flag = 1
        }
        else{
          flag = 0
          video.pause()
          video.style.opacity = 0
          vidcrsr.innerHTML =` <i class="ri-play-fill"></i>`
          gsap.to("#video-crsr",{
            scale:1
          })
          gsap.to("#vid img", {
            opacity: 1
          })
        }
       })

    videoContainer.addEventListener("mouseleave",function(){

        gsap.to("#crsr",{
            scale:1
        })
        gsap.to("#video-crsr",{
            scale: 0
        })
  })
  
}

crsr_animation();
// locomotive()

function sheyanimation() {
  Shery.imageEffect(".image-div", {
    style: 6,
    config: {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":31.3,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":0,"range":[999,999]},"aspect":{"value":0.8000000317891439},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.03,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.01,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

    gooey: true,
  });
}

sheyanimation();

document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y
  })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1
  })
})

document.querySelector("#hero3").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0
  })
})

var fade=document.querySelector("#arrow h1")

t1.from("fade",{
  
})