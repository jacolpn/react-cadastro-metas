import React, { useState } from 'react'
import Apis from '../../services/api'
import TextField from '../../components/TextField/TextField'
import Select from '../../components/Select/Select'
import ButtonSalvar from '../../components/Button/ButtonSalvar'
import SaveIcon from '@material-ui/icons/Save'
import BarraNavegacao from '../BarraNavegacao/BarraNavegacao'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

const Cadastro = props => {
    const { classes } = props
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tipos, setTipos] = useState('')

    function clicouCadastrar(event) {
        event.preventDefault()
        if (titulo === '' || descricao === '' || tipos === '') {
            alert('Preencha todos os campos!')
        } else {
            const novaMeta = {
                titulo,
                descricao,
                tipos
            }
            Apis.salvarMetas(novaMeta)
            alert('Cadastrado com Sucesso!')
        }
    }
    
    return (
        <div className={classes.principal}>
            <BarraNavegacao />
            <div className={classes.cadastro}>
                <h1 className={classes.h1}>Cadastrar Meta</h1>
                <form autoComplete="off" onSubmit={clicouCadastrar} className={classes.form}>
                    <TextField  placeholder='Coloque um titulo aqui.'
                                label='Titulo'
                                value={titulo}
                                onChange={event => setTitulo(event.target.value)}
                    />
                    <br />
                    <TextField  placeholder='Coloque uma descrição aqui.'
                                label='Descrição'
                                value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                    />
                    <br />
                    <Select value={tipos}
                            onChange={event => setTipos(event.target.value)}
                    />
                    <br /><br />
                    <ButtonSalvar   type='submit'
                                    size='medium'
                                    children='Salvar'
                                    startIcon={<SaveIcon />}
                    />
                </form>
            </div>
        </div>
    )
}
export default withStyles(styles, { withTheme: true})(Cadastro)