import React from "react";
import ItemCount from '../components/ItemCount';
import './ItemDetail.css';


function ItemDetail({ item }) {
    return (
        <div  className="box-left">
            <div >
                <div className="izquierda-imagen" >
                    <img src={ item?.imageUrl } alt="Imagen del producto" />
                </div>
            </div>
            <div className="titulo" >
                <div >
                    <h2>{ item?.title} </h2>
                    <p> { item?.price}</p>
                    <br />
                    <p>  {item?.description} </p>
                    <div >
                        
                        <ItemCount initial={0} stock={item.stock} onAdd={() => {}} />
                    <p><button>Comprar</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
