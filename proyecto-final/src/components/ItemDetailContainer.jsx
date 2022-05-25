import react, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import ItemDetail from './ItemDetail';
import db from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
  



function ItemDetailContainer () {
    const [selectedItem, setSelectedItem] = useState () ;
    const { id } = useParams();
    const [loading , setLoading] = useState(true)


    const getSelected = async(idItem,) => {
        try{
setLoading(true)
const document = doc(db, "items" , idItem)
const response = await getDoc(document)
const result = {id: response.id, ...response.data()}

setSelectedItem(result)
setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
         getSelected(id)

    }, [id]);

    return ( 
        <div >
            <>{loading ? <h1>Cargando... </h1> : <ItemDetail item={selectedItem} />}</>
        </div>
    )
}

export default ItemDetailContainer
//<div className=""></div>