import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'

class Home extends React.Component {
    render() {
        return (
            <div className='App-header'>
                <h1>Cadastro de Metas</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}
export default Home