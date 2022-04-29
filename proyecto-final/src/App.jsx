import ItemCount from "./components/ItemCount";
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

//const handleOnAdd = (cantidad) => {

    //alert(`Agregaste ${cantidad} productos`)

 // }

function App() {
  

  return (
    <div className="App">
      
      <NavBar />
     <ItemListContainer greeting="Bienvenidos"/>     
     <ItemCount stock={5} initial={1} />     
        
      
    </div>
  );
}

export default App;
//onAdd={handleOnAdd}