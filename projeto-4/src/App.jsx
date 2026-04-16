import { useState } from 'react'; // Adicionado o import do hook
import Pagina1 from './components/Pagina-1'; // Importando com nome válido
import Pagina2 from './components/Pagina-2';
import Pagina3 from './components/Pagina-3';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Use nomes sem hifens aqui */}
      <Pagina1 /> 
    </>
  );
}

export default App;