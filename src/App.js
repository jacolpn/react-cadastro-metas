import React from 'react'
import './App.css'
import Metas from './components/Metas'
import CadastroMetas from './components/CadastroMetas'
import Home from './components/Home'
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
            <Link to='/'><StyledTab label="Início" /></Link>
            <Link to='/cadastros'><StyledTab label="Cadastro" /></Link>
            <Link to='/metas'><StyledTab label="Metas" /></Link>
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
        
        <Route exact path='/' component={Home} />
        <Route path='/cadastros' component={CadastroMetas} />
        <Route path='/metas' component={Metas} />
      </div>
    </Router>
  )
}
export default App