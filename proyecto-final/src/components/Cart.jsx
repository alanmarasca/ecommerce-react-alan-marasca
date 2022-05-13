import react from "react";
import { useCartContext } from "./CartContextProvider";
import CartItem from "./CartItem";


const Cart = () => {
    const { cartList, emptyCard , totalPrice} = useCartContext();

    return (
    <div>
        {cartList.map((item) => (
        <CartItem key ={item.id} item={item}/>
         ))}
        {cartList.length > 0 ? (
         <>
         <button onClick={ () => emptyCard()}>Vaciar Compra</button>
         <h1>Precio Total:  ${totalPrice()}</h1>
         </>
         ) : ( <h2>Carrito Vacio </h2>)
        }
         </div>
         );
};

export default Cart