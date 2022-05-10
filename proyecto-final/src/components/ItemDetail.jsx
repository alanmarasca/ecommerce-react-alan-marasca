import React, {useState} from 'react';
import ItemCount from '../components/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
const [CantidadDeProductos, setCantidadDeProductos] = useState(null);
    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
    }
    return (
        <div  className="box-left">
            <div >
                <div className="izquierda-imagen" >
                    <img src={ item?.img } alt="Imagen del producto" />
                </div>
            </div>
            <div className="titulo" >
                <div >
                    <h2>{ item?.title} </h2>
                    <p> { item?.price}</p>
                    <br />
                    <p>  {item?.description} </p>
                    <div >
                        {CantidadDeProductos ?
                        <button> <Link to='/cart'>Terminar Compra ({CantidadDeProductos} items)</Link></button>:
                        <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
