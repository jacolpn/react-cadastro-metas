import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345, 
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    background: '#fcfcfc'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

function CardMeta({textPrim,textSeg, textTec, onClickDel,onClickMore, toMore}) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            JN
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Link  onClick={onClickMore} to={toMore}><MoreVertIcon/></Link>
          </IconButton>
        }
        title={textPrim}
        subheader={textSeg}
      />
      <img alt="complex" src="https://miro.medium.com/max/3150/1*bAHmNooyPiszMs_3rYVWVg.png" width='200px' />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DeleteIcon onClick={onClickDel} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><strong>Descrição:</strong></Typography>
          <Typography paragraph style={{textAlign: 'justify'}}>
            &nbsp;&nbsp;{textTec}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
export default CardMeta