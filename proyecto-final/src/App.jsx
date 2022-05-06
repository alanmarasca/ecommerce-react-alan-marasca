//import ItemCount from "./components/ItemCount";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar';

//const handleOnAdd = (cantidad) => {

    //alert(`Agregaste ${cantidad} productos`)

 // }

function App() {
  

  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/> } />
      </Routes>
      
       
         
        
      
    </div>
  );
}

export default App;
//onAdd={handleOnAdd}
//<ItemCount stock={5} initial={1} /> 
 
