import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import logo from '../../assets/logo.png'

const Logo = () => {

    const logoRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(logoRef.current, { y: -14, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 1.6,
        });
    }, { scope: logoRef, dependencies: [] })

  return (
    <img ref={logoRef} src={logo} alt="A-Rock" className="h-11 w-auto" />
  )
}

export default Logo
