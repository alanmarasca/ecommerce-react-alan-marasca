import react from "react";
import { useCartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import './CartItem.css'

const Cart = () => {
    const { cartList, emptyCard , totalPrice} = useCartContext();

    return (
    <div>
        {cartList.map((item) => (
        <CartItem key ={item.id} item={item}/>
         ))}
        {cartList.length > 0 ? (
         <>
         <button className='BigContain' onClick={ () => emptyCard()}>Vaciar Compra</button>
         <h1>Precio Total:  ${totalPrice()}</h1>
         <Link to='/checkout'>
         <button className='BigContain'> Finalizar Compra</button>
         </Link>
         </>
         ) : ( <div><h2>Carrito Vacio </h2> 
         <Link to='/'> Ir a inicio</Link>
                
          </div>)}
         </div>
         );
};

export default Cart