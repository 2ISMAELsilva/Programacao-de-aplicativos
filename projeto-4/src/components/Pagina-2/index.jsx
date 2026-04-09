import { useState } from 'react'
import './style.css'

export default function ListaUsuarios() {
    // Simulando uma lista já existente
    const [usuarios] = useState([
        { nome: 'Ana Silva', email: 'ana@email.com' },
        { nome: 'Bruno Souza', email: 'bruno@email.com' },
        { nome: 'Carla Dias', email: 'carla@email.com' }
    ])
    const [busca, setBusca] = useState('')

    // Filtrando a lista de acordo com o que o usuário digita
    const usuariosFiltrados = usuarios.filter(usuario => 
        usuario.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <div className='formulario'>
            <h2>Buscar Usuários</h2>
            <input 
                type="text" 
                placeholder="Digite um nome para buscar..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />

            <hr />

            <h2>Resultados ({usuariosFiltrados.length})</h2>
            <ul>
                {usuariosFiltrados.length > 0 ? (
                    usuariosFiltrados.map((usuario, index) => (
                        <li key={index}>
                            <strong>{usuario.nome}</strong> - {usuario.email}
                        </li>
                    ))
                ) : (
                    <p>Nenhum usuário encontrado.</p>
                )}
            </ul>
        </div>
    )
}