import React from 'react'
import Apis from '../../services/api'
import GridMeta from '../../components/Grid/gridMeta'
import { Link } from 'react-router-dom'
import ButtonIcon from '../../components/Button/buttonIcon'

export default class MetasMedio extends React.Component {
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
        Apis.carregarMetasPorTipos('Médio').then((res)=>{
            this.setState({
                isLoading: false,
                metas: res.data
            })
        }) 
    }

    navegarMetaSelecionada(id) {
        localStorage.setItem('user', id)
    }

    deletarMetas(id) {
        Apis.deletarMetas(id).then((res)=> this.loadData())
    }

    renderMetas(metas){
        return (
            <>
                <Link to={'/meta_selecionada/' + metas.id} onClick={() => this.navegarMetaSelecionada(metas.id)}>
                    <GridMeta   textPrimeiro={metas.titulo}
                                textSegundo={metas.tipos}
                                onClick={() => this.deletarMetas(metas.id)}
                                key={metas.id}
                                to={'/meta_selecionada/'}
                    />
                </Link>
                <ButtonIcon onClick={() => this.deletarMetas(metas.id)}/>
            </>
        )
    }

    render(metas) {
        return (
            <div>
                <h1>Metas de médio prazo</h1>
                <div id="series" className="row list-group" >
                    {this.state.metas.map(this.renderMetas)}
                </div>                    
            </div>
        )
    }
}