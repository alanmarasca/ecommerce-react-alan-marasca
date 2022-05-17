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
            
            
           setCarlist(cartList.map(product => product.id === item.id ? {...product, quantity: product.quantity + quantity}: product))
        }else{

       setCarlist([...cartList, {...item, quantity}])}

   }
        const emptyCard = () => {
            setCarlist ([])
        }

        const deleteById = (id) => { 
            setCarlist(cartList.filter((item) => item.id  !== id));
        };
   const removeOneUnit = (id) => { 
       if(unitsPerProduct(id) === 1){
         return  deleteById(id)
       }
       setCarlist(cartList.map((product) => product.id === id ? {...product, quantity: product.quantity - 1} : product)
     )   
   }



 const totalCount= () => {    

 let cant = 0    

 cartList.forEach((e) => cant += e.quantity)    

 return cant  };

        


        const totalPrice = () => {
            let cant = 0
            cartList.forEach((e) => cant += e.quantity * e.price)
            return cant
                    };

        const unitsPerProduct = (id) => {
            return cartList.find(item => item.id === id).quantity;
        };





  return (<CartContext.Provider value={{cartList, addToCard, emptyCard, deleteById, totalCount, totalPrice, removeOneUnit, }}>
         {children} 
        </CartContext.Provider>);
  
};

export default CartContextProvider

