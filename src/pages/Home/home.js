import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'

export default class Home extends React.Component {
    render() {
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
}