import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'
import GridPerfil from '../../components/Grid/gridPerfil'

function Perfil() {
    return (
        <>
            <BarraNavegacao />
            <div className='perfil'>
                <GridPerfil />
            </div>
        </>
    )
}
export default Perfil