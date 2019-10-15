import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Cadastro from './pages/Cadastro/cadastro'
import Metas from './pages/Metas/metas'
import MetaSelecionada from './pages/Metas/metaSelecionada'
import CardMeta from './components/Card/cardMeta'
import Perfil from './pages/Perfil/Perfil'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/metas" component={Metas} />
                <Route path="/card" component={CardMeta} />
                <Route path="/meta_selecionada" component={MetaSelecionada} />
                <Route path="/perfil" component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes