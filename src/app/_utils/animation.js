const { default: gsap } = require("gsap");

export default function animation() {
    gsap.fromTo(
        ".title",
        {
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1},)
        }