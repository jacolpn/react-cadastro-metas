import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import SelecT from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  }
}))

function Select({onChange, value}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
    
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Tipos</InputLabel>
        <SelecT open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={value}
                onChange={onChange}
                //value={age}
                //onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'demo-controlled-open-select',
                }}
        >
          <MenuItem value={'Curto'}>Curto</MenuItem>
          <MenuItem value={'Medio'}>Medio</MenuItem>
          <MenuItem value={'Longo'}>Longo</MenuItem>
        </SelecT>
      </FormControl>
  )
}
export default Select