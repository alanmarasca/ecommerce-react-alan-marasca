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
  const [loading, setLoading] = useState(true)
  const { categoryId} = useParams();

useEffect( () => {
 setLoading(true)
    getProduct(categoryId)
    .then((respuestaPromise) =>  setProductos(respuestaPromise))
    .finally(() => setLoading(false));
  }, [categoryId]  );



  
  return (
    <>{loading ? <h1>Cargando... </h1> : <ItemList productos={listaProductos} />}</>
  )
}

export default ItemListContainer