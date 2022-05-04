import React, {useEffect, useState} from "react";

import productos from "./data/productos";
import ItemList from "./ItemList";




function ItemListContainer({greeting}) {
  const [listaProductos, setProductos] = useState([]);

  function getProduct() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(productos);
    }, 2000);
  });

}
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