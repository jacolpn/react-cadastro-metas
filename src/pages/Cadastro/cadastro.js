import React, { useState } from 'react'
import Apis from '../../services/api'
import TextField from '../../components/TextField/textField'
import Select from '../../components/Select/select'
import ButtonSalvar from '../../components/Button/buttonSalvar'
import SaveIcon from '@material-ui/icons/Save'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'

function Cadastro () {
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
        <>
            <BarraNavegacao />
            <div className='cadastro'>
                <h1>Cadastrar Meta</h1>
                <form autoComplete="off" onSubmit={clicouCadastrar}>
                    <TextField  placeholder='Coloque um titulo aqui.'
                                label='Titulo'
                                value={titulo}
                                onChange={event => setTitulo(event.target.value)}
                    />
                    <TextField  placeholder='Coloque uma descrição aqui.'
                                label='Descrição'
                                value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                    />
                    <Select value={tipos}
                            onChange={event => setTipos(event.target.value)}
                    /> 
                    <ButtonSalvar   type='submit'
                                    size='medium'
                                    children='Salvar'
                                    startIcon={<SaveIcon />}
                    />
                </form>
            </div>
        </>
    )
}
export default Cadastro