import React from 'react'
import MetasCurto from './metasCurto'
import MetasLongo from './metasLongo'
import MetasMedio from './metasMedio'
import BarraNavegacao from '../BarraNavegacao/barraNavegacao'

function Metas() {
    return (
        <>
            <BarraNavegacao />
            <div class='metas'>
                <MetasCurto />
                <MetasMedio />
                <MetasLongo />
            </div>
        </>
    )
}
export default Metas