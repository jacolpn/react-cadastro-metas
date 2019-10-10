import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'

function Home() {
    return (
        <>
            <BarraNavegacao />
            <div className='App-header'>
                <h1>Cadastro de Metas</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </>
    )
}
export default Home