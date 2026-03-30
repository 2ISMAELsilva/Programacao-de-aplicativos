import { useState } from 'react'
import './App.css'
import Mensagem from './components/Memsagem'
import InfoCurso from './components/infoCurso'
import InfoAluno from './components/infoAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem vindo ao meu projeto</h1>
      <Mensagem/>
      <hr />
      <InfoAluno/>
      <hr />
      <InfoCurso/>

    </>
  )
}

export default App
