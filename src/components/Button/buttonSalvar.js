import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}))

function ButtonSalvar({type, onClick, children, startIcon, size}) {
  const classes = useStyles()

  return (
    <Button variant="contained"
            size={size}
            className={classes.button}
            startIcon={startIcon}
            type={type}
            onClick={onClick}
            children={children}
    />
  )
}
export default ButtonSalvar