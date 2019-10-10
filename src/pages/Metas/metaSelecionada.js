import React from 'react'
import Apis from '../../services/api'
import {Link} from 'react-router-dom'

export default class MetaSelecionada extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            metas: []
        }
        this.renderMetas = this.renderMetas.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        this.setState({isLoading: true})
        var user_id = localStorage.getItem('user')
        Apis.carregarMetasPorId(user_id).then((res)=>{
            this.setState({
                isLoading: false,
                metas: res.data
            })
        }) 
    }

    renderMetas(metas){
        return (
            <div key={metas.id}  >
                <p>{metas.titulo}</p>
                <p>{metas.tipos}</p>
                <p>{metas.descricao}</p>
            </div>
        )
    }

    render(metas) {
        return (
            <div>
                <h1>Metas de médio prazo</h1>
                <div id="series" className="row list-group" >
                    {this.state.metas.map(this.renderMetas)}
                </div>
                <Link to='/metas'>Voltar</Link>                
            </div>
        )
    }
}