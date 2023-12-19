import React from 'react'
import  './Header.scss'

function Header({data}) {
    const {mode , setMode} = data
  return (
    <header className= {mode ? 'white': 'black'}>
    <div className="container">
        <div className="header__wrapper">
            <span className="header__span"></span>
            <ul className="header__list">
                <li className="header__item">
                    <a href="#" className={mode ? 'color': 'colo2'}>Product</a>
                </li>
                <li className="header__item">
                    <a href="#" className={mode ? 'color': 'colo2'}>about</a>
                </li>
                <li className="header__item">
                    <a href="#" className={mode ? 'color': 'colo2'}>contact</a>
                </li>
            </ul>
            <button className={mode ? 'btn__mode1': 'btn__mode2'}  onClick={()=> setMode(!mode)}>
                {!mode ?<i class="bi bi-brightness-high-fill"></i> :<i class="bi bi-moon-stars-fill"></i>}
            </button>

        </div>
    </div>
</header>

  )
}

export default Header