import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const carregarMetas = () => api.get('metas')
export const carregarTipos = () => api.get('tipos')
export const salvarMetas = (novaMeta) => api.post('metas', novaMeta)

const apis = {
    carregarMetas,
    carregarTipos,
    salvarMetas
}

export default apis