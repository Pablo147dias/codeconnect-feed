// Code: Main App component
import './App.css'
import Barradepesquisa from './components/Barradepesquisa'
import Sidebar from './components/Sidebar'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Card from './components/Card'
import { useState, useEffect } from 'react'


function App() {
  const [dados, setDados] = useState([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <Barradepesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista__cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
              id={item.id}
              imagemUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
            </li>
          )):null}
        </ul>
      </div>
    </div>
  )
}

export default App
