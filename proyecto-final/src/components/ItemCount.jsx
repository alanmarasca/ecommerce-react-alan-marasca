import React,{useState} from 'react';
import './ItemCuenta.css';

function ItemCount(props) {
  const[count, setCount] = useState(props.initial);

  function handleAdd(){
      if(count<props.stock) {
     return setCount(count + 1)};
  }

  function handleSubstract() {
    if(count>props.initial){
        return setCount(count-1)};
  }


  const handleOnAdd = () => {
  <div>
           <button onClick={handleOnAdd}>Agragar al carrito</button>
        </div>

    alert(`Productos agregados al carrito`)

  }

  
    return (
    <div> 
        <div className='BoxCount'>
            <button onClick={handleSubstract}> - </button>
            <div className='Cantidad'>  {count}  </div>
            <button onClick={handleAdd}> +</button>
        </div>
       

    </div>
  )
}

export default ItemCount 
