import React from 'react'
import MetasCurto from './metasCurto'
import MetasLongo from './metasLongo'
import MetasMedio from './metasMedio'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'
import { withStyles } from '@material-ui/styles'
import styles from './styles'

const Metas = props => {
    const { classes } = props
    return (
        <div className={classes.principal}>
            <BarraNavegacao />
            <div className={classes.metas}>
                <MetasCurto />
                <MetasMedio />
                <MetasLongo />
            </div>
        </div>
    )
}
export default withStyles(styles, { withTheme: true})(Metas)