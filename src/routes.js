import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Cadastro from './pages/Cadastro/Cadastro'
import Metas from './pages/Metas/Metas'
import MetaSelecionada from './pages/Metas/MetaSelecionada'
import Perfil from './pages/Perfil/Perfil'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/metas" component={Metas} />
                <Route path="/meta_selecionada" component={MetaSelecionada} />
                <Route path="/perfil" component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes