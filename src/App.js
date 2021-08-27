import Header from './components/Header';
import StoreFrontBody from './components/StoreFrontBody';
import ProductGrid from './components/productgrid'; 
function App() {
  return (
    <div className="bg-purple-400"> 
   <Header/>
   <StoreFrontBody/>

   <ProductGrid/>
   <StoreFrontBody/>
   <ProductGrid/>
    </div>
    
  );
}

export default App;
