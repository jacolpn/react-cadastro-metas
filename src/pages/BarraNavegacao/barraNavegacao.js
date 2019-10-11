import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  effects: {
    fontSize: '20px',
    color: 'black',
    textDecoration: 'none',
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1
    }
  }
}))

function BarraNavegacao () {
    const classes = useStyles()
    return (
      <>
        <Link to={'/'} className={classes.effects} >Início</Link>
        <Link to={'/cadastro'} className={classes.effects} >Cadastro</Link>
        <Link to={'/metas'} className={classes.effects} >Metas</Link>
      </>
    )
}
export default BarraNavegacao