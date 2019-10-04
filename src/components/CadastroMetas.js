import React from 'react'
import '../App.css'
import apis from '../Api'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

class CadastroMetas extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tipos: [],
            isLoading: false,
            redirect: false
        }
        this.salvarMetas = this.salvarMetas.bind(this)
    }
    
    componentDidMount() {
        this.setState({isLoading: true})
        apis.carregarTipos().then((res) => {
          this.setState({isLoading:false, tipos: res.data})
        })
      }

    salvarMetas() {
        const novaMeta = {
            titulo: this.refs.titulo.value,
            descricao: this.refs.descricao.value,
            tipos: this.refs.tipos.value
        }
        apis.salvarMetas(novaMeta).then(
            (res)=>{
                this.setState({
                    redirect: '/metas'
                })
            }
        )
    }

    render() {
        return (
            <div className="app">
                { this.state.redirect && <Redirect to={this.state.redirect} /> }                
                <header className="App-header">
                    <h1>Hello Cadastro de Metas!</h1>
                    <form>
                        Titulo: <input type="text" ref='titulo' className="form-control"/> <br/>
                        Descrição: <input type="text" ref='descricao' className="form-control"/> <br/>                    
                        <select ref='tipos' >
                            { this.state.tipos
                                .map(key => <option key={key} value={key}>{key}</option>)
                            }
                        </select> <br />
                        <br/><br/>
                        <Button type="button" variant="contained" color="primary" onClick={this.salvarMetas} >Salvar</Button>
                    </form>
                </header>
            </div>
        )
    }
}
export default CadastroMetas