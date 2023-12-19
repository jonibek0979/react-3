import './Hero.scss'
import React from 'react'
import img from '../../components/assets/img/photo-1493238792000-8113da705763.avif'

function Hero({ mode }) {
    return (
        <div className={mode ? 'white' : 'black'}>
            <div className="hero">
                <div className="container">
                    <div className="hero__nilla1">
                        <div className="nulla">
                            <h2 className={mode ? 'color' : 'colo2'}>
                                Nulla commodo aliqua aliqua ut
                            </h2>
                            <span className='sapn'>
                                <span>
                                    <p className={mode ? 'color' : 'colo2'}>Tagline
                                        Fast and powerful, just like your work
                                        Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit
                                        Read more
                                        
                                        Button</p>
                                    <b className={mode ? 'color' : 'colo2'}>Read more
                                        </b>
                                </span>
                                <span>
                                    <p className={mode ? 'color' : 'colo2'}>Tagline
                                        Fast and powerful, just like your work
                                        Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit
                                        Read more
                                        
                                        Button</p>
                                    <b className={mode ? 'color' : 'colo2'}>Read more
                                        </b>
                                </span>
                            </span>
                        </div>
                        <div className="nulla2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="hero__nilla2">
                        <div className="nul1">
                            <h2 className={mode ? 'color' : 'colo2'}>Nulla ut ea</h2>
                            <p className={mode ? 'color' : 'colo2'}>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt</p>
                        </div>
                        <ul className="nul2">
                            <li>
                                <a className={mode ? 'color' : 'colo2'} href="#">Graphic Design</a> <br />
                                <a className={mode ? 'color' : 'colo2'} href="#">UX Design</a> <br />
                                <a className={mode ? 'color' : 'colo2'} href="#">Prototyping</a> <br />
                                <a className={mode ? 'color' : 'colo2'} href="#">Webflow</a>
                            </li>
                            <li>
                                <a className={mode ? 'color' : 'colo2'} href="#">Branding</a> <br />
                                <a className={mode ? 'color' : 'colo2'} href="#">Coding</a> <br />
                                <a className={mode ? 'color' : 'colo2'} href="#">Back-End</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hero__nilla3">
                        <div className="nol__1">
                            <h2 className={mode ? 'color' : 'colo2'}>Where teams design together</h2>
                            <p className={mode ? 'color' : 'colo2'}>
                            Lorem quis sunt magna dolor consectetur aliqua officia laborum reprehenderit
                            </p>
                        </div>
                        <div className="nol__1">
                            <img src={img} alt="" />
                        </div>
                        <div className="nol__1">
                            <img src={img} alt="" />
                        </div>
                        <div className="nol__1">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="hero__nilla4">
                        <h2  className={mode ? 'color' : 'colo2'}>Nulla commodo aliqua aliqua ut</h2>
                        <div className="noll1">
                        <div className="nolll">
                            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.</p>
                            <b>Ralph Richards</b>
                            <h5>UX Designer</h5>
                        </div>
                        <div className="nolll">
                            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.</p>
                            <b>Ralph Richards</b>
                            <h5>UX Designer</h5>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero