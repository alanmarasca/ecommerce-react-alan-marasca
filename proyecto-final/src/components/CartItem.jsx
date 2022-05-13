import React from 'react'
import { useCartContext } from './CartContextProvider'

const CartItem = ({item}) => {
    const {deleteById} = useCartContext()
  return (
    <div>
        <h1>{item.title}</h1>
        <h4> Unidades: {item.quantity}</h4>
        <h4>Precio Unitario: $ {item.price}</h4>
        <img src={ item?.img } alt="Imagen del producto" />
        <button onClick={() => deleteById(item.id)}> Eliminar</button>
    </div>
  )
}

export default CartItem