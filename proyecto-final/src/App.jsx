//import ItemCount from "./components/ItemCount";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';



//const handleOnAdd = (cantidad) => {

    //alert(`Agregaste ${cantidad} productos`)

 // }

function App() {
  

  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/> } />
        <Route path='/checkout' element={<Checkout/> } />

      </Routes>
      
       
         
        
      
    </div>
  );
}

export default App;
//onAdd={handleOnAdd}
//<ItemCount stock={5} initial={1} /> 
 
