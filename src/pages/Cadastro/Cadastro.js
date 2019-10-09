import React, { useState } from 'react'
import '../../App.css'
import Apis from '../../services/Api'
import TextField from '../../components/TextField/TextField'
import Select from '../../components/Select/Select'
import ButtonSalvar from '../../components/Button/ButtonSalvar'
import SaveIcon from '@material-ui/icons/Save'

function Cadastro () {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tipos, setTipos] = useState('')

    function clicouCadastrar(event) {
        event.preventDefault()        
        const novaMeta = {
            titulo,
            descricao,
            tipos
        }
        Apis.salvarMetas(novaMeta)
        alert('Cadastrado com Sucesso!')
    }
    
    return (
        <div>
                <h1>Cadastrar uma meta:</h1>
                <form autoComplete="off" onSubmit={clicouCadastrar} className="">
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
                    <br />
                    <ButtonSalvar   type='submit'
                                    size='medium'
                                    children='Salvar'
                                    startIcon={<SaveIcon />}
                    />
                </form>
        </div>
    )
}
export default Cadastro