import { useState } from 'react'
import './style.css'

export default function ConfiguracoesPerfil() {
    const [nomeSistema, setNomeSistema] = useState('Meu App React')
    const [tema, setTema] = useState('Claro')
    const [notificacoes, setNotificacoes] = useState(true)

    const salvarConfiguracoes = (event) => {
        event.preventDefault()
        alert('Configurações salvas com sucesso!')
        console.log({ nomeSistema, tema, notificacoes })
    }

    return (
        <div className='formulario'>
            <h2>Configurações do Sistema</h2>
            <form onSubmit={salvarConfiguracoes}>
                <label>Nome do Sistema:</label>
                <input 
                    type="text" 
                    value={nomeSistema}
                    onChange={(e) => setNomeSistema(e.target.value)}
                />

                <label>Tema do App:</label>
                <select value={tema} onChange={(e) => setTema(e.target.value)}>
                    <option value="Claro">Claro</option>
                    <option value="Escuro">Escuro</option>
                    <option value="Sistema">Padrão do Sistema</option>
                </select>

                <div style={{ marginTop: '15px' }}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={notificacoes}
                            onChange={(e) => setNotificacoes(e.target.checked)}
                        />
                        Ativar notificações por e-mail
                    </label>
                </div>

                <button type='submit' style={{ marginTop: '20px' }}>
                    Salvar Alterações
                </button>
            </form>

            <hr />

            <div className='resumo'>
                <h3>Resumo Atual:</h3>
                <p><strong>Status:</strong> {notificacoes ? 'Recebendo Alertas' : 'Silenciado'}</p>
                <p><strong>Interface:</strong> {tema}</p>
            </div>
        </div>
    )
}