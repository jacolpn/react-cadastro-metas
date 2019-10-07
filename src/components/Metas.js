import React from 'react'
import '../App.css'
import apis from '../Api'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 200,
      maxHeight: 200
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '60%',
      maxHeight: '60%',
    },
  }));

const statuses = {
    'Curto': 'Curto',
    'Médio': 'Médio',
    'Longo': 'Longo'
}

class Metas extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            metas: []
        }
        this.renderMetas = this.renderMetas.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        this.setState({isLoading: true})
        apis.carregarMetas(this.state.metas).then((res)=>{
            this.setState({
                isLoading: false,
                metas: res.data
            })
        })
    }

    deletarMetas(id) {
        apis.deletarMetas(id).then((res)=> this.loadData())
    }

    renderMetas(metas){
        return (
            <div key={metas.id} className={useStyles.root} style={{'max-width': '1100px'}} >
            <Paper className={useStyles.paper} >
            <Grid container spacing={2}>
                <Grid item>
                <ButtonBase className={useStyles.image} >
                    <img className={useStyles.img} alt="complex" src="https://miro.medium.com/max/3150/1*bAHmNooyPiszMs_3rYVWVg.png" width='300px' />
                </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={1}>
                    <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" >
                        <h2>{metas.titulo}</h2>
                    </Typography>
                    <Typography variant="body2" gutterBottom >
                        <b>Prioridade:</b> {statuses[metas.tipos]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{'padding': '20px'}}>
                        {metas.descricao}
                    </Typography>           
                    <p>
                        <Button type="button" variant="contained" color="primary">Editar</Button>
                        &nbsp;
                        <Button type="button" variant="contained" color="secondary" onClick={() => this.deletarMetas(metas.id)}>Apagar</Button>
                    </p>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Paper>
            <br />
            </div>
        )
    }

    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h1>Bem Vindo as Suas Metas</h1>
                    <div id="series" className="row list-group">
                        {this.state.metas.map(this.renderMetas)}
                        
                    </div>
                    
                </header>
            </div>
        )
    }
}
export default Metas