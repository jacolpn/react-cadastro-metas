import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/auth'
import Inicio from './pages/Inicio/Inicio'
import Cadastro from './pages/Cadastro/Cadastro'
import Metas from './pages/Metas/Metas'
import MetaSelecionada from './pages/Metas/MetaSelecionada'
import Perfil from './pages/Perfil/Perfil'
import Login from './pages/Login/Login'
import EditarMeta from './pages/Metas/EditarMeta'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location} }} />
        )
    )}/>
)


const Routes = () => (
        //O BrowserRouter permite as rotas poderem trabalhar no Browser, entendendo as URL's e podendo manipular.
        <BrowserRouter>
            {/*O Switch não permite que mais de uma rota seja chamada ao mesmo tempo. */}
            <Switch>
                <PrivateRoute exact path="/" component={Inicio} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/metas" component={Metas} />
                <Route path="/meta_selecionada" component={MetaSelecionada} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/editar" component={EditarMeta} />
            </Switch>
        </BrowserRouter>
)
export default Routes