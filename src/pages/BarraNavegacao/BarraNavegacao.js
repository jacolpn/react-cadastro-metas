import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const BarraNavegacao = props => {
  const { classes } = props
    return (
      <div className={classes.navWrapper}>
        <Link to={'/'} className={classes.link}>Início</Link>
        <Link to={'/cadastro'} className={classes.link}>Cadastro</Link>
        <Link to={'/metas'} className={classes.link}>Metas</Link>
      </div>
    )
}
export default withStyles(styles, { withTheme: true })(BarraNavegacao);