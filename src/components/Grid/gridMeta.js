import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  effects: {
    textDecoration: 'none',}
}))

function GridMeta({textPrimeiro, textSegundo,to,onClick}) {
  const classes = useStyles()  
  return (
    <Link to={to} onClick={onClick} className={classes.effects} >
    <Paper className={classes.paper} >
      <Grid container wrap="nowrap" spacing={1} >
        <Grid item>
          <Avatar>
            <img className={useStyles.img} alt="complex" src="https://miro.medium.com/max/3150/1*bAHmNooyPiszMs_3rYVWVg.png" width='55px' />
          </Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography color='primary' noWrap>{textPrimeiro}</Typography>
          <Typography noWrap>{textSegundo}</Typography>
        </Grid>
      </Grid>
    </Paper>
    </Link>
  )
}
export default GridMeta