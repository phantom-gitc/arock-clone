import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

const Menu = ({ onMenuClick }) => {

    const menuRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(menuRef.current, { y: -14, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 1.7,
        });
    }, { scope: menuRef, dependencies: [] })

  return (
    <h3
      ref={menuRef}
      className='text-[10px] cursor-pointer'
      onClick={onMenuClick}
    >
      MENU
    </h3>
  )
}

export default Menu
