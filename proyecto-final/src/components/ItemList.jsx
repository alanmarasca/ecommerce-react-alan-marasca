import React from 'react'
import Item from './Item'
import './ItemList.css'

function ItemList ( {productos} ) {

    return ( 
        <div className='ItemLista'>
        {productos.map (thisproducto => {
            return (
                <Item productos={thisproducto} key={thisproducto.id} />
            )
        }) }
        </div>
    )
    }

export default ItemList