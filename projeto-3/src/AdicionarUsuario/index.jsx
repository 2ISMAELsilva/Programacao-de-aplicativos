import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    // Função para adicionar usuário em uma lista.
    const handlerAdicionarUsuario = (event) => {
        // Evitando que a página recarregue ao mudar algum elemento na página.
        event.preventDefault()
        if (nome && email) {
            // Adicionando novo usuário
            setListaDeUsuarios([...listaDeUsuarios, { nome, email }])
            // Definindo os campos como vazio.
            setNome('')
            setEmail('')
        }
    }
    
    return (
        // Criando HTML da página.
        <div className='formulario'>
            <h2>Adicionar Usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>usuários adicionados</h2>
            <ul>
                {/* usando o map para mostrar cada usuário na lista
                com base no índice. */}
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}