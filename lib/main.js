document.addEventListener('DOMContentLoaded', () => {
  
  gsap.to("#introduction-animation-bg", {duration:0.7, width:'0%', delay:1});

  var tl = gsap.timeline({defaults:{ease: "power3.out"}});
  tl.to("#introduction-animation-bg", {duration:0.7, width:'0%', delay:1, onComplete:() => {document.getElementById('introduction-animation').remove();}});
  tl.to("#introduction-animation-title", {duration:1, x:-100, opacity:0 }, "-=0.8");
  tl.from(["#introduction-title", "#introduction-body"], {duration:0.5, x:"-100", opacity:0, stagger:0.2}, "-=0.5");
  tl.from('.navbar-item', {duration:0.5, y:"-100", opacity:0, stagger:0.2}, "-=0.3");
});
