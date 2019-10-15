/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Apis from '../../services/api'
class GridPerfil extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            metas: []
        }
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        Apis.carregarMetas().then((res)=>{
            this.setState({
                metas: res.data
            })
        })
    }

    render (metas) {
    return (
        <Grid className='gridPrincipal'>
            <h1>Olá Usuário!</h1>
            <p>Insígnias conquistadas:</p>
            <Grid className='gridPerfil'>
                Primeira meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 1 ?
                        <img src='/img/Icone01Medalha.png' width='50px'/> :
                        <img src='/img/Icone02MedalhaPreto.png' width='50px'/> 
                    }
                </Grid>                
            </Grid>
            <Grid className='gridPerfil'>
                Segunda meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 2 ?
                        <img src='/img/Icone02MedalhaCor.png' width='50px'/> :
                        <img src='/img/Icone02MedalhaPreto.png' width='50px'/>  
                    }
                </Grid>                
            </Grid>
            <Grid className='gridPerfil'>
                Terceira meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 3 ?
                        <img src='/img/Icone02MedalhaCor.png' width='50px'/> :
                        <img src='/img/Icone02MedalhaPreto.png' width='50px'/>  
                    }
                </Grid>                
            </Grid>
            <Grid className='gridPerfil'>
                Quarta meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 4 ?
                        <img src='/img/Icone03MedalhaCor.png' width='50px'/> :
                        <img src='/img/Icone03MedalhaPreto.png' width='50px'/>  
                    }
                </Grid>                
            </Grid>
            <Grid className='gridPerfil'>
                Quinta meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 5 ?
                        <img src='/img/Icone03MedalhaCor.png' width='50px'/> :
                        <img src='/img/Icone03MedalhaPreto.png' width='50px'/>  
                    }
                </Grid>                
            </Grid>
            <Grid className='gridPerfil'>
                Sexta meta
                <Grid className='gridPerfil2' >
                    {this.state.metas.length >= 6 ?
                        <img src='/img/Icone03MedalhaCor.png' width='50px'/> :
                        <img src='/img/Icone03MedalhaPreto.png' width='50px'/>  
                    }
                </Grid>                
            </Grid>
        </Grid>
    )
}
}
export default GridPerfil
