import react from "react";
import { useCartContext } from "./CartContextProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";


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
         <Link to='/checkout'>
         <button className="btn btn-info"> Finalizar Compra</button>
         </Link>
         </>
         ) : ( <div><h2>Carrito Vacio </h2> 
         <Link to='/'> Ir a inicio</Link>
                
          </div>)}
         </div>
         );
};

export default Cart