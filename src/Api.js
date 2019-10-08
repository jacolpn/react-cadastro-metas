import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const carregarMetas = () => Api.get('metas')
export const carregarTipos = () => Api.get('tipos')
export const carregarMetasPorTipos = (tipos) => Api.get('metas?tipos='+tipos)
export const salvarMetas = (novaMeta) => Api.post('metas', novaMeta)
export const deletarMetas = (id) => Api.delete('metas/' + id)

export const Apis = {
     carregarMetas,
     carregarTipos,
     salvarMetas,
     carregarMetasPorTipos,
     deletarMetas
 }

export default Apis