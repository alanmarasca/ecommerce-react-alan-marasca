
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";



import ItemList from "./ItemList";
import db from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
  


function ItemListContainer() {
  
  
  
  const [Items, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId} = useParams();

  const getData = async (category) =>{
    try{
      setLoading(true)
 
      const document = category ? query(collection(db, "items"), where('category', '==', category))
                                : collection(db, "items")
const col = await getDocs(document)
const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})

setProductos(result)
setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

useEffect( () => {
 getData(categoryId)
  }, [categoryId]  );



  
  return (
    <>{loading ? <h1>Cargando... </h1> : <ItemList productos={Items} />}</>
  )
}

export default ItemListContainer