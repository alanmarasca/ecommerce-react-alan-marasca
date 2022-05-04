import react, {useEffect, useState} from "react";
import ItemDetail from './ItemDetail';


function getItem () {
    const myPromise = new Promise((resolve, reject) => {
        const item ={
            id:1,
            title: 'Cuadro',
            stock: 5,
            price: '$1950',
            imageUrl: 'https://fotosprint.s3.us-west-2.amazonaws.com/prod/img/p/7/2/8/728.jpg?v=1651087653',
            description: 'Tranformá tu foto preferida en un cuadro de primera calidad. Marco de madera sólida y vidrio Float mandamos imágenes de 1 mb a 10 mb. Entrega: 16 días hábiles para CABA y hasta 23 para el resto del país',
            
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    }) ;
    return myPromise;
}

function ItemDetailContainer () {
    const [item, setItem] = useState ({}) ;

    useEffect(() => {
        getItem()
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err);
            alert('Ocurrio error')
        });

    }, []);

    return ( 
        <div >
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer