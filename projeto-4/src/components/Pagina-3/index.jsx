import { useState } from 'react'
import './style.css'

export default function ConfiguracoesQuarto() {
    const [nomeDono, setNomeDono] = useState('Andy')
    const [ambiente, setAmbiente] = useState('Quarto do Andy')
    const [estaVindo, setEstaVindo] = useState(false)

    const salvarConfiguracoes = (event) => {
        event.preventDefault()
        alert('O brinquedo salvou as configurações antes do humano chegar!')
    }

    return (
        <div className='formulario'>
            <h2>⚙️ Configurações do Quarto</h2>
            <form onSubmit={salvarConfiguracoes}>
                <label>Nome na sola da bota:</label>
                <input 
                    type="text" 
                    value={nomeDono}
                    onChange={(e) => setNomeDono(e.target.value)}
                />

                <label>Localização:</label>
                <select value={ambiente} onChange={(e) => setAmbiente(e.target.value)}>
                    <option value="Quarto do Andy">Quarto do Andy</option>
                    <option value="Creche Sunnyside">Creche Sunnyside</option>
                    <option value="Quarto da Bonnie">Quarto da Bonnie</option>
                </select>

                <div style={{ marginTop: '15px' }}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={estaVindo}
                            onChange={(e) => setEstaVindo(e.target.checked)}
                        />
                        <strong> O HUMANO ESTÁ VINDO!</strong> (Modo Estátua)
                    </label>
                </div>

                <button type='submit' style={{ marginTop: '20px' }}>
                    Confirmar Missão
                </button>
            </form>

            <hr />

            <div className='resumo'>
                <h3>Status da Missão:</h3>
                <p><strong>Dono:</strong> {nomeDono}</p>
                <p><strong>Cenário:</strong> {ambiente}</p>
                <p><strong>Alerta:</strong> {estaVindo ? '🤫 Fingindo de morto!' : '🤠 Brincando livremente'}</p>
            </div>
        </div>
    )
}