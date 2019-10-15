import React from 'react'
import Apis from '../../services/api'
import CardMeta from '../../components/Card/cardMeta'

class MetasMedio extends React.Component {
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
            <div key={metas.id}>
                <CardMeta   textPrim={metas.titulo}
                            textSeg={metas.tipos}
                            textTec={metas.descricao}
                            onClickDel={() => this.deletarMetas(metas.id)}
                            onClickMore={() => this.navegarMetaSelecionada(metas.id)}
                            toMore={'/meta_selecionada/' + metas.id} 
                />
            </div>
        )
    }

    render(metas) {
        return (
            <div>
                <h1>Médio Prazo</h1>
                <div id="series" className="row list-group" >
                    {this.state.metas.map(this.renderMetas)}
                </div>                    
            </div>
        )
    }
}
export default MetasMedio