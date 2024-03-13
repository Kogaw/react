import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';


import { useState } from 'react';
function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      { /* Imagem em public */}

      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Imagem de cidade"/>
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul"/> 
    </div>
  );
}

export default App;
