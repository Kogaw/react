import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


import { useState } from 'react';
function App() {
  // const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id:1, brand: "Ferrari", color:"Amarela", newCar:true, km:0},
    {id:2, brand: "Kia", color:"Branco", newCar:false, km:34343},
    {id:1, brand: "Renault", color:"Azul", newCar:false, km:234},
  ]

  function showMessage(){
    console.log("Evento de componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    {id: 4,nome: "Raphael", idade: 12, profissao:"Estudante"},
    {id: 5,nome: "Kei", idade: 23, profissao:"Desempregado"},
    {id: 6,nome: "Telma", idade: 53, profissao:"Terapeuta"}
  ]

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
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/> 
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={45000} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      {/* fragments */}
      <Fragments propFragment="teste" />
      {/* children prop */}
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}  />
      {pessoas.map((pessoa) => (
        <UserDetails 
        key={pessoa.id}
        nome = {pessoa.nome}
        idade = {pessoa.idade}
        profissao = {pessoa.profissao}/>
      ))}

      
    </div>
  );
}

export default App;
