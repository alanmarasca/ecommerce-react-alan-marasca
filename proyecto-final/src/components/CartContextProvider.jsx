import { createContext, useContext, useState } from "react";



export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);



const CartContextProvider = ({children}) => {
    const[cartList, setCarlist] = useState ([]);
 
    const isInCart = (id) => { 
       return cartList.some(item => item.id === id)
    }

   const addToCard = (item, quantity) => {
        if(isInCart(item.id)) {
            
            
           return setCarlist(cartList.map(product => product.id === item.id ? {...product, quantity: product.quantity + quantity}: product))
        }

       setCarlist([...cartList, {...item, quantity}])

   }
        const emptyCard = () => {
            setCarlist ([])
        }

        const deleteById = (id) => { 
            setCarlist(cartList.filter((item) => item.id  !== id));
        };

        const totalCount = () => {
            return cartList.reduce((total,item) => total + item.quantity, 0 );
        };


        const totalPrice = () => {
            return cartList.reduce((total, item) => total + item.quantity * item.price, 0)
        };

        const unitsPerProduct = (id) => {
            return cartList.find(item => item.id === id).quantity;
        };





  return (<CartContext.Provider value={{cartList, addToCard, emptyCard, deleteById, totalCount, totalPrice}}>
         {children} 
        </CartContext.Provider>);
  
};

export default CartContextProvider

