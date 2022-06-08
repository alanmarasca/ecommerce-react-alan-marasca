import React, {useState} from 'react';
import ItemCount from '../components/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContextProvider';


function ItemDetail({ item }) {
const [CantidadDeProductos, setCantidadDeProductos] = useState(null);
const {addToCard} = useCartContext ();

    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
        addToCard(item,quantityToAdd)
       
    }
    return (
        <div  className="box-left">
            <div >
                <div className="izquierda-imagen" >
                    <img src={ item?.img } className='rounded mx-auto d-block img_med' alt="Imagen del producto" />
                </div>
            </div>
            <div className="titulo" >
                <div >
                    <h2>{ item?.title} </h2>
                    <h3> Precio $ { item?.price}</h3>
                    <br />
                    <p>  {item?.description} </p>
                    <div >
                        {CantidadDeProductos ?
                        <button className='botonTerminarCompra'> <Link to='/cart'>Terminar Compra ({CantidadDeProductos} items)</Link></button>:
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
