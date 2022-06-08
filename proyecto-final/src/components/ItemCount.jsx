import React,{useState} from 'react';
import './ItemCuenta.css';

function ItemCount({stock, initial, onAdd}) {
  const[count, setCount] = useState(initial);

  function handleAdd(){
      if(count< stock) {
      setCount(count + 1)};
  }

  function handleSubstract() {
    if(count>0){
         setCount(count-1)};
  }
 
  

  
    return (
    <div > 
        <div className='BoxCount'>
            <button className='BigContain' onClick={ () => handleSubstract ()}> - </button>
            <input readOnly value={count} />
            
            <button className='BigContain' onClick={ () =>handleAdd()}> +</button>
        </div>
        <button className='BigContain' onClick={ () => (count<= stock) && onAdd(count)}> Agregar al carrito</button>
           </div>
  )
}

export default ItemCount 