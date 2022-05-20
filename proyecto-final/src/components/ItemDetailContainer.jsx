import react, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, onSnapshot} from 'firebase/firestore';
import ItemDetail from './ItemDetail';


function getItem (id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}

function ItemDetailContainer () {
    const [item, setItem] = useState ({}) ;
    const { id } = useParams();

    useEffect(() => {
         getItem(id)
        .then(snapshot => {
            setItem({...snapshot.data(), id:snapshot.id});
        })
        .catch(err => {
            console.log(err);
            alert('Ocurrio error')
        });

    }, [id]);

    return ( 
        <div >
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer