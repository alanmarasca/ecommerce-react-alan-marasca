import React, {useEffect, useState} from "react";

import productos from "./data/productos";
import ItemList from "./ItemList";

function getProduct() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(productos);
    }, 2000);
  });

}


function ItemListContainer({greeting}) {
  const [listaProductos, setProductos] = useState([]);

  
  useEffect( () => {
    getProduct().then(respuestaPromise => {
      setProductos(respuestaPromise);
    });
  }, []  );
  return (
    <h1>{greeting} </h1>,
    <ItemList productos={listaProductos} />
  )
}

export default ItemListContainer