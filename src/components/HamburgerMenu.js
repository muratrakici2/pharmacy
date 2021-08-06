import React, { useRef, useState } from 'react'
import "../Hamburger.css"


const HamburgerMenu = (props) => {
  const [navbar, setnavbar] = useState("navbarhide");
  const myButton = useRef();

  function changeClass() {
    myButton.current.classList.toggle("menu--active");
    if (navbar === "navbarhide") {
      setnavbar("navbarshow")
    } else {
      setnavbar("navbarhide")
    }
  }

  return (
    <>
      <button ref={myButton} onClick={changeClass} className="menu menu--squeeze">
        <span className="menu__inner"></span>
      </button>
      <div className={`${navbar} navbar`}>
        {props.children}
      </div>
    </>
  )
}

export default HamburgerMenu
