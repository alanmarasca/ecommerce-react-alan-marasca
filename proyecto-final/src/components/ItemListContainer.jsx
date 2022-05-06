import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import productos from "./data/productos";
import ItemList from "./ItemList";

  function getProduct(category) {
  return new Promise( (resolve, reject) => {
    const productosFiltro =  category ? productos.filter(p => p.category === category) : productos
    setTimeout( () => {
      resolve(productosFiltro);
    }, 2000);
  });

}


function ItemListContainer({greeting}) {
  
  
  
  const [listaProductos, setProductos] = useState([]);
  const { categoryId} = useParams();

useEffect( () => {
 
    getProduct(categoryId).then(respuestaPromise => {
      setProductos(respuestaPromise);
    });
  }, [categoryId]  );



  
  return (
    <h1>{greeting} </h1>,
    <ItemList productos={listaProductos} />
  )
}

export default ItemListContainer