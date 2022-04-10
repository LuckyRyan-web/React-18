import React from 'react'
import logo from './logo.svg'
import style from './App.module.scss'
import Index from '@/pages/Index'

const App = () => {
    return (
        <div className={style.App}>
            <header className={style.AppHeader}>
                <img src={logo} className={style.AppLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={style.AppLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>

                <Index />
            </header>
        </div>
    )
}

export default App
