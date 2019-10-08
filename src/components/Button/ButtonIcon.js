import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}))

function ButtonIcon({onClick}) {
  const classes = useStyles()

  return (
    <IconButton aria-label="delete" className={classes.margin}>
      <DeleteIcon fontSize="large" onClick={onClick}/>
    </IconButton>
  )
}
export default ButtonIcon