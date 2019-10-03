import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import {    BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />)

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />)


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }, 
  demo2: {
    backgroundColor: '#282c34',
  }
}))

function App() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  return (
    <Router>
      <div className="App">
        <div className={classes.demo2}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" centered>
            <StyledTab label="Início" />
            <StyledTab label="Cadastro" />
            <StyledTab label="Metas" />
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </header>
      </div>
    </Router>
  )
}
export default App