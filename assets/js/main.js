document.addEventListener('DOMContentLoaded', () => {
  
  var tl = gsap.timeline({defaults:{ease: "power3.out"}});

    tl.to("#introduction-animation-bg", {duration:0.7, width:'0%', delay:1, onComplete:() => {document.getElementById('introduction-animation').remove();}});
    tl.to("#introduction-animation-title", {duration:1, x:-100, opacity:0 }, "-=0.8");
    tl.from(["#introduction h1", "#introduction p"], {duration:0.5, x:"-100", opacity:0, stagger:0.2}, "-=0.5");
    tl.from('.navbar-item', {duration:0.5, y:"-100", opacity:0, stagger:0.2}, "-=0.3"); 
});


var pjax = new Pjax({
  elements: "a", // default is "a[href], form[action]"
  selectors: ["#content"],
  timeout : 10000,
  cacheBust: false
});


document.addEventListener('pjax:complete', ()=>{

  gsap.to('#pageloader', {duration:0.5, x:"-100%", onComplete:()=>{
    gsap.set('#pageloader', {x:"100%"});
  }});
  gsap.from('#content',{duration:0.5, x:"-100"});
  
});


function loadpage(e){
  gsap.to('#pageloader', {duration:0.5, x:"0%", onComplete:()=>{
    pjax.loadUrl(e.target.href);
  }});
}

