import React, {useState} from 'react'
import '../App.css'
import Apis from '../Api'
import { Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
        marginTop: 5,
        marginBottom: 20,
        minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    dense: {
        marginTop: 5,
        minWidth: 300
    }
  }))

function CadastroTOP () {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
        
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

    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = event => {
        setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
        }));
    }

    const classes = useStyles();
    var tipos = values.age;

    return (
        <div>
            <header className="App-header">
                <h2>Cadastrar uma meta:</h2>
                <form autoComplete="off" onSubmit={clicouCadastrar} className="">
                    <TextField
                                id='asd'
                                label="Titulo"
                                placeholder="Titulo..."            
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                value={titulo}
                                onChange={event => setTitulo(event.target.value)}
                    /> <br />
                    <TextField
                                label="Descrição"
                                className={clsx(classes.textField, classes.dense)}
                                margin="dense"
                                placeholder="Descrição..."
                                value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                    /> <br />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-helper">Tipo</InputLabel>
                        <Select
                                value={values.age}
                                onChange={handleChange}
                                inputProps={{
                                name: 'age',
                                id: 'age-helper',
                        }}>
                            <MenuItem value={'Curto'}>Curto</MenuItem>
                            <MenuItem value={'Medio'}>Medio</MenuItem>
                            <MenuItem value={'Longo'}>Longo</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <Button type="submit" variant="contained" color="primary" >Salvar</Button>
                </form>
            </header>
        </div>
    )
}
export default CadastroTOP