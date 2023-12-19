import React from 'react'
import './Foote.scss'
import logo from '../assets/img/logo.png'
import logo1 from '../assets/img/inLogo.png'
import logo2 from '../assets/img/twitterLogo.png'
import logo3 from '../assets/img/facebookLogo.png'
import logo4 from '../assets/img/instagram.png'

function Footer({mode}) {
    return (
        <footer className={mode ? 'white' : 'black'}>
            <div className="container">
                <div className="footer">
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    <div className='footer__div'>
                        <p className={mode ? 'color': 'colo2'}>
                            cillum incididunt
                        </p>
                        <span>
                            <a target='_blank' href="https://www.pngwing.com/en/search?q=linkedin">
                                <img src={logo1} alt="" />
                            </a>

                            <a target='_blank' href="https://twitter.com/?lang=ru">
                                <img src={logo2} alt="" />
                            </a>

                            <a target='_blank' href="https://www.facebook.com/?locale=ru_RU">
                                <img src={logo3} alt="" />
                            </a>

                            <a target='_blank' href="https://www.instagram.com/">
                                <img src={logo4} alt="" />
                            </a>

                        </span>
                        <h5 className={mode ? 'color' : 'colo2'}>
                            Nostrud aliquip laboris
                            © 2020 Wirefigma
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer