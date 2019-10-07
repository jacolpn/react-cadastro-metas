import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  dense: {
    marginTop: 19
  }
}))

export default function TextFields() {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-dense"
        label=""
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />      
    </form>
  )
}