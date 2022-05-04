//import ItemCount from "./components/ItemCount";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

//const handleOnAdd = (cantidad) => {

    //alert(`Agregaste ${cantidad} productos`)

 // }

function App() {
  

  return (
    <div className="App">
      
      <NavBar />
       <ItemDetailContainer/>  
         
        
      
    </div>
  );
}

export default App;
//onAdd={handleOnAdd}
//<ItemCount stock={5} initial={1} /> 
//<ItemListContainer greeting="Bienvenidos"/> 