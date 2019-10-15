/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <BarraNavegacao />
            <div className='home'>
                <h1>Cadastro de Metas</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to={'/perfil'}>
                    <img src='/img/IconeMedalha.png' />
                </Link>
            </div>
        </>
    )
}
export default Home