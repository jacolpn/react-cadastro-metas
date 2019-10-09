import React from 'react'
import Apis from '../../services/Api'
import GridMeta from '../../components/Grid/GridMeta'

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

    deletarMetas(id) {
        Apis.deletarMetas(id).then((res)=> this.loadData())
    }

    renderMetas(metas){
        return (
            <GridMeta   textPrimeiro={metas.titulo}
                        textSegundo={metas.tipos}
                        onClick={() => this.deletarMetas(metas.id)}
                        key={metas.id}
            />
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
export default MetasMedio