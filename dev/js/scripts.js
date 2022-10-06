import { gsap } from "gsap";

gsap.set("button", (transformOrigin:"center bottom"));

gsap.from("#first-line", (duration:0.5, alpha:0, y:-100));
gsap.from("#second-line", (duration:0.5, alpha:0, y:-50, delay:0.3));

let button = document