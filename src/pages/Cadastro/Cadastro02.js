import React from 'react'
import apis from '../../services/api'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Redirect } from 'react-router-dom'
import BarraNavegacao from '../BarraNavegacao/BarraNavegacao'
import TextField from '../../components/TextField/TextField'
import Select from '../../components/Select/Select'
import ButtonSalvar from '../../components/Button/ButtonSalvar'

class Cadastro02 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tipos: [],
            isLoading: false,
            redirect: false
        }
        this.salvarMetas = this.salvarMetas.bind(this)
        this.clicouCadastrar = this.clicouCadastrar.bind(this)
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

    clicouCadastrar(event) {
        //event.preventDefault()
        //console.log(this.titulo)
        console.log('ola')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.principal}>
                <BarraNavegacao />
                { this.state.redirect && <Redirect to={this.state.redirect} /> }                
                <header className={classes.cadastro}>
                    <h1>Hello Cadastro de Metas!</h1>
                    <form>
                        {/* <TextField  placeholder='Coloque um titulo aqui.'
                                    label='Titulo'
                                    ref={this.titulo}
                        /> */}
                        <p className={classes.p}>Titulo: <input type="text" ref='titulo' className={classes.input} /></p>
                        {/* <TextField  placeholder='Coloque uma descrição aqui.'
                                    label='Descrição'
                        /> */}
                        <p className={classes.p}>Descrição: <input type="text" ref='descricao' className={classes.input} /></p>
                        {/* <Select 
                        /> */}
                        <select ref='tipos' className={classes.select} >
                            <option value='Curto' className={classes.option} >Curto</option>
                            <option value='Médio' className={classes.option}>Médio</option>
                            <option value='Longo' className={classes.option}>Longo</option>
                            {/* { this.state.tipos
                                .map(key => <option key={key} value={key}>{key}</option>)
                            } */}
                        </select>
                        <br/><br/><br/>
                        <Button type="button" variant="contained" color="primary" onClick={this.salvarMetas} >Salvar</Button>
                        {/* <ButtonSalvar 
                            type='submit'
                            size='medium'
                            children='Salvar'
                            onClick={() => this.clicouCadastrar()}
                        /> */}
                    </form>
                </header>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Cadastro02)