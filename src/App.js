import './App.css';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <header>
      <NavBar />
      <ItemsListContainer />
      </header>
    </div>
  );
}

export default App;
