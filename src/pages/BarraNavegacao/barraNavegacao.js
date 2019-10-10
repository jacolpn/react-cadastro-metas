import React from 'react'
import { Link } from 'react-router-dom'

export default function BarraNavegacao () {
    return (
        <>
        <Link to={'/'} >Início</Link>&nbsp;
        <Link to={'/cadastro'} >Cadastro</Link>&nbsp;
        <Link to={'/metas'} >Metas</Link>
        </>
    )
}