import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const myCars  = [
    {name:"Fusca", km:10000, color:"Branco"},
    {name:"Polo", km:32000, color:"Preto"},
    {name:"Onix", km:0, color:"Vermelho"}
  ]

  return (
    <div className="App">
      <h1>Challenge CSS</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <CarDetails car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
