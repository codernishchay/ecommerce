import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import StoreFrontBody from './components/StoreFrontBody';
import Card from './components/card';
import ProductGrid from './components/productgrid';
function App() {
  return (
    <div className="App">
   <Header/>
  <ProductGrid/>
    </div>
    
  );
}

export default App;
