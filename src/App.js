import './App.css'
import { useRef, useState } from 'react';

const horaAtual = new Date().getHours();
function App() {

  const [saudaçao, setSaudaçao] = useState();

  function Comprimentar() {
    if (horaAtual >= 1 && horaAtual < 12) {
      setSaudaçao('Bom dia')
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
      setSaudaçao('Boa tarde')
    }

    else {
      setSaudaçao('Boa Noite')
    }
    console.log(horaAtual)

  }

  return (
    <div className="App">
      <h1>{saudaçao}</h1>

      <button className="clicar" onClick={Comprimentar}> clique aqui </button>


    </div>
  );
}

export default App;
