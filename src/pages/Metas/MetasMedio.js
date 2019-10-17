import React from 'react'
import Apis from '../../services/api'
import CardMeta from '../../components/Card/CardMeta'

class MetasMedio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            metas: []
        }
        this.renderMetas = this.renderMetas.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        Apis.carregarMetasPorTipos('Médio').then((res)=>{
            this.setState({
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
            <>
                <h1>Médio Prazo</h1>
                {this.state.metas.map(this.renderMetas)}
            </>
        )
    }
}
export default MetasMedio