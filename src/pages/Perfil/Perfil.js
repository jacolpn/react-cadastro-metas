import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import BarraNavegacao from '../BarraNavegacao/BarraNavegacao'
import Apis from '../../services/api'
import styles from './styles'

import icone01Medalha from '../../assets/images/Icone01Medalha.png'
import icone02MedalhaCor from '../../assets/images/Icone02MedalhaCor.png'
import icone02MedalhaPreto from '../../assets/images/Icone02MedalhaPreto.png'
import icone03MedalhaCor from '../../assets/images/Icone03MedalhaCor.png'
import icone03MedalhaPreto from '../../assets/images/Icone03MedalhaPreto.png'
import perfilUSR from '../../assets/images/IconeUSR.png'

class Perfil extends React.Component {
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

    render(metas) {
        const {
            classes
        } = this.props
        
        return (
            <div className={classes.principal}>
                <BarraNavegacao />
                <div className={classes.perfilWrapper}>
                    <div className={classes.usuario}>
                        <div className={classes.imgUSR}>
                            <img src={perfilUSR} alt='usuário' width='90px'/>
                        </div>
                        <h1 className={classes.nomeUsuario}>Olá Usuário!</h1>
                    </div>
                    <p className={classes.p}>Insígnias conquistadas:</p>
                    <Grid className={classes.perfilPrincipal}>
                        <Grid className={classes.insignia1}>
                            Primeira meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 1 ?
                                    <img src={icone01Medalha} alt='medalha' width='50px'/> :
                                    <img src={icone02MedalhaPreto} alt='medalha' width='50px'/> 
                                }
                            </Grid>                
                        </Grid>
                        <Grid className={classes.insignia1}>
                            Segunda meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 2 ?
                                    <img src={icone02MedalhaCor} alt='medalha' width='50px'/> :
                                    <img src={icone02MedalhaPreto} alt='medalha' width='50px'/>  
                                }
                            </Grid>                
                        </Grid>
                        <Grid className={classes.insignia1}>
                            Terceira meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 3 ?
                                    <img src={icone02MedalhaCor} alt='medalha' width='50px'/> :
                                    <img src={icone02MedalhaPreto} alt='medalha' width='50px'/>
                                }
                            </Grid>                
                        </Grid>
                        <Grid className={classes.insignia1}>
                            Quarta meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 4 ?
                                    <img src={icone03MedalhaCor} alt='medalha' width='50px'/> :
                                    <img src={icone03MedalhaPreto} alt='medalha' width='50px'/>
                                }
                            </Grid>                
                        </Grid>
                        <Grid className={classes.insignia1}>
                            Quinta meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 5 ?
                                    <img src={icone03MedalhaCor} alt='medalha' width='50px'/> :
                                    <img src={icone03MedalhaPreto} alt='medalha' width='50px'/>  
                                }
                            </Grid>                
                        </Grid>
                        <Grid className={classes.insignia1}>
                            Sexta meta
                            <Grid className={classes.insignia2}>
                                {this.state.metas.length >= 6 ?
                                    <img src={icone03MedalhaCor} alt='medalha' width='50px'/> :
                                    <img src={icone03MedalhaPreto} alt='medalha' width='50px'/>  
                                }
                            </Grid>                
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true})(Perfil)