import React from 'react'
import '../App.css'
import apis from '../Api'
import { Button, TextField, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import SimpleSelect from './form/Select'

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
            titulo: this.keys.titulo.value,
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

                    <br /><br />
                    <form >
                        <h3>Um dia vai funcionar!</h3>
                        <TextField label="Titulo..."/> <br />
                        <TextField label="Descrição..."/> <br />
                        <Select value={SimpleSelect.values}
                                onChange={SimpleSelect.handleChange}          
                                inputProps={{
                                name: 'age',
                                id: 'age-simple',
                        }}>
                            <MenuItem value={10}>Curto</MenuItem>
                            <MenuItem value={20}>Médio</MenuItem>
                            <MenuItem value={30}>Longo</MenuItem>
                        </Select>
                        <FormHelperText>Escolha com atenção!</FormHelperText> <br />
                        <Button type="button" variant="contained" color="primary" onClick={this.salvarMetas} >Salvar</Button>
                    </form>
                </header>
            </div>
        )
    }
}
export default CadastroMetas