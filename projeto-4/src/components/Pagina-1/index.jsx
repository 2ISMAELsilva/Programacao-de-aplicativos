import { useState } from 'react'
import './style.css'

export default function AdicionarBrinquedo() {
    const [nome, setNome] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [caixaDeBrinquedos, setCaixaDeBrinquedos] = useState([])

    const handlerAdicionarBrinquedo = (event) => {
        event.preventDefault()
        if (nome && personagem) {
            setCaixaDeBrinquedos([...caixaDeBrinquedos, { nome, personagem }])
            setNome('')
            setPersonagem('')
        }
    }
    
    return (
        <div className='formulario'>
            <h2>🚀 Adicionar à Caixa de Brinquedos</h2>
            <form onSubmit={handlerAdicionarBrinquedo}>
                <input 
                    type="text"
                    placeholder="Nome do Brinquedo (ex: Woody)"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Tipo/Personagem (ex: Cowboy)'
                    value={personagem}
                    onChange={(e) => setPersonagem(e.target.value)}
                />
                <button type='submit'>Recrutar Brinquedo</button>
            </form>

            <hr />

            <h2>🤠 Brinquedos do Andy</h2>
            <ul>
                {caixaDeBrinquedos.map((item, index) => (
                    <li key={index}>
                        <strong>{item.nome}</strong> - {item.personagem} 
                    </li>
                ))}
            </ul>
        </div>
    )
}