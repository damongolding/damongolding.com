import gsap from "gsap/gsap-core"
import { CSSPlugin } from "gsap/CSSPlugin"

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

const animationOut = (node) => {
  gsap.to("#introduction-highlight", { 
    borderLeftWidth: 0,
    marginLeft:"12px",
    duration: 0.3 
  })

  gsap.to([`#introduction`, "section:not(.hero)"], {
    y: -20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
  })
}

const animationIn = (node) => {
  gsap.from("#introduction-highlight", { 
    borderLeftWidth: 0,
    marginLeft:"12px",
    duration: 0.3 
  })

  gsap.from([`#introduction`, "section:not(.hero)"], {
    y: -20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
  })
}

export {animationIn, animationOut}
