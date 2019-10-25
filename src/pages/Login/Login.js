import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import ButtonSalvar from '../../components/Button/ButtonSalvar'
import varLogin from '../../services/auth'
const Login = props => {
    function clicou() {
    }

    const { classes } = props
    return (
        <div className={classes.principal}>
            <h1>Login</h1>
            <ButtonSalvar
                children='Entrar'
                color='primary'
            />
        </div>
    )
}
export default withStyles(styles, { withTheme: true})(Login)