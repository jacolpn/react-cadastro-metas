import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Textfield from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  }
}))

export default function TextField({placeholder, label, value, onChange}) {
  const classes = useStyles()

  return (
    <Textfield    placeholder={placeholder}
                  label={label}
                  value={value}
                  onChange={onChange}
                  id="standard-dense"
                  className={clsx(classes.textField, classes.dense)}
                  margin="dense"
    />
  )
}