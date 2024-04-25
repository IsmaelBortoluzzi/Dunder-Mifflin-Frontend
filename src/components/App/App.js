import Navbar from '../Navbar';
import Formulario from '../Formulario';
import { useState, useEffect } from 'react'
import Time from '../Time';


function App() {

  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/product/list/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProdutos(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar  />
      {/* <Formulario times={ times.map(time => time.nome) } aoCadastrarColaborador={ aoNovoColaboradorAdicionado } title="Preencha os dados para criar o card do colaborador" /> */}
      {
        produtos.map(produtos => 
          <Time 
            key={ produtos.nome }
            nome={ produtos.nome }
            corPrimaria={ produtos.corPrimaria } 
            corSecundaria={ produtos.corSecundaria }
          />
        )
      }
      
    </div>
  );
}

export default App;