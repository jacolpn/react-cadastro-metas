import React from 'react'
import { Link } from 'react-router-dom'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

import logo from '../../logo.svg'
import imagemMedalha01 from '../../assets/images/IconeMedalha.png'

const Home = props => {
    const { classes } = props
    return (
        <div className={classes.principal}>
            <BarraNavegacao />
            <div className={classes.homeWrapper}>
                <h1 className={classes.h1}>Cadastro de Metas</h1>
                <img src={logo} className={classes.imgCentral} alt="logo" />
                <Link to={'/perfil'} className={classes.imgInsignia}>
                    <img src={imagemMedalha01} alt='medalha' />
                    <h6 className={classes.h6}>Veja suas insígnias.</h6>
                </Link>
            </div>
        </div>
    )
}
export default withStyles(styles, { withTheme: true})(Home)