import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
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
    </div>
  );
}

export default App;
