import React from 'react'
import { Link } from 'react-router-dom'

function BarraNavegacao () {
    return (
      <div className='nav'>
        <Link to={'/'}>Início</Link>
        <Link to={'/cadastro'}>Cadastro</Link>
        <Link to={'/metas'}>Metas</Link>
      </div>
    )
}
export default BarraNavegacao