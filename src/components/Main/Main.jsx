import React from 'react'
import './Main.scss'

function Main({ mode }) {
    return (
        <main className={mode ? 'white': 'black'}>
            <div className="container MAIN__inner">
                <h2 className={mode ? 'color' : 'colo2'}>Fast and powerful, just like your work</h2>
                <p className={mode ? 'color': 'colo2'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </main>
    )
}

export default Main