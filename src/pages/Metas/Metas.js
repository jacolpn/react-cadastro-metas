import React from 'react'
import MetasCurto from './MetasCurto'
import MetasLongo from './MetasLongo'
import MetasMedio from './MetasMedio'
import BarraNavegacao from '../BarraNavegacao/BarraNavegacao'
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