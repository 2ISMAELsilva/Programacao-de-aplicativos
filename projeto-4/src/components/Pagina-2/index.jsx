import { useState } from 'react'
import './style.css'

export default function ListaPersonagens() {
    const [personagens] = useState([
        { nome: 'Sheriff Woody', tipo: 'Boneco de Pano' },
        { nome: 'Buzz Lightyear', tipo: 'Patrulheiro Espacial' },
        { nome: 'Jessie', tipo: 'Cowgirl' },
        { nome: 'Rex', tipo: 'Dinossauro de Plástico' },
        { nome: 'Slinky', tipo: 'Cachorro de Mola' }
    ])
    const [busca, setBusca] = useState('')

    const personagensFiltrados = personagens.filter(p => 
        p.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <div className='formulario'>
            <h2>🔍 Localizar Brinquedo Perdido</h2>
            <input 
                type="text" 
                placeholder="Procurar por nome..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />

            <hr />

            <h2>Resultados do Radar ({personagensFiltrados.length})</h2>
            <ul>
                {personagensFiltrados.length > 0 ? (
                    personagensFiltrados.map((p, index) => (
                        <li key={index}>
                            <strong>{p.nome}</strong> | {p.tipo}
                        </li>
                    ))
                ) : (
                    <p>Oh não! O brinquedo não está no quarto.</p>
                )}
            </ul>
        </div>
    )
}