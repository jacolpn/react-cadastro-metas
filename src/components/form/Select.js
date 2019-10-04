import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Tipos</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-helper',
          }}>
          <MenuItem value={10}>Curto</MenuItem>
          <MenuItem value={20}>Médio</MenuItem>
          <MenuItem value={30}>Longo</MenuItem>
          {/* { 
              this.state.tipos.map(key => <option key={key} value={key}>{key}</option>)
            } */}

          {/* <MenuItem value="">
            <em>{ Object.keys(statuses).map(key => <MenuItem key={key} value={key}>{statuses[key] }</MenuItem>)}</em>
          </MenuItem> */}
          {/* <MenuItem value={10}>Curto</MenuItem>
          <MenuItem value={20}>Médio</MenuItem>
          <MenuItem value={30}>Longo</MenuItem> */}
          {/* { Object.keys(statuses).map(key => <MenuItem key={key} value={key}>{statuses[key] }</MenuItem>)} */}

          {/* <select ref='tipos'>
            { 
              this.state.tipos.map(key => <option key={key} value={key}>{key}</option>)
            }
          </select> */}



          {/* <TextField
                            type='text'
                            ref='titulo'
                            label='Titulo'
                            className={clsx(useStyles.textField, useStyles.dense)}
                            margin='dense'
                        /><br />
                        <TextField
                            type='text'
                            ref='descricao'
                            label='Descrição'
                            className={clsx(useStyles.textField, useStyles.dense)}
                            margin='dense'
                        /><br />
                        <SimpleSelect ref='tipos'/> */}







        </Select>
        <FormHelperText>Escolha com atenção!</FormHelperText>
      </FormControl>
    </form>
  );
}
