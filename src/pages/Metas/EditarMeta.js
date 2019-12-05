import React, { Component } from 'react'
import Apis from '../../services/api'
import { Redirect } from 'react-router-dom'

class EditarMeta extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            metas: {}
        }
    }

    componentDidMount() {
        Apis.carregarMetasPorId()
    }

    salvarMeta() {
        const novaMeta = {

        }
        Apis.alterarMeta(novaMeta).then((res) => {
            this.setState({
                redirect: '/metas/' + this.refs.tipos
            })
        })
    }
    
    render() {
        return (
            <section>
                { this.state.redirect && <Redirect to={this.state.redirect} /> }
                <h1>Editar Meta</h1>
                <form>
                    <p>Nome: <input type="text" ref="name" /></p>
                </form>
            </section>
        )
    }
}
export default EditarMeta