import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {collection,  getDocs, getFirestore , query, where} from 'firebase/firestore';

import ItemList from "./ItemList";

  function getProduct(category) {
  const db = getFirestore();

const itemsCollection = collection(db, 'items');

  const q = category && query(
    itemsCollection,
    where('category', '==', category)
  );

return getDocs( q  || itemsCollection);
}


function ItemListContainer() {
  
  
  
  const [listaProductos, setProducts] = useState([]);
  
  const { categoryId} = useParams();

useEffect( () => {
  getProduct(categoryId)
  .then(snapshot =>  {
   
    setProducts(snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id}
    }));
  })
.catch(err => {
  console.log(err);
  alert('ocurrio un error')
})
  

 }, [categoryId]  );




  


 // setLoading(true)
   // getProduct(categoryId)
    //.then((respuestaPromise) =>  setProductos(respuestaPromise))
    //.finally(() => setLoading(false));
 



  
  return (
     <ItemList productos={listaProductos} />
  )
}

export default ItemListContainer