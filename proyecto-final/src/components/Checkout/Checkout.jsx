import { async } from "@firebase/util";
import { useState, useContext } from "react";
import { CartContext } from "../CartContextProvider";
import db from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";





const Checkout = () => {

const {cartList, totalPrice}=useContext(CartContext)

const [buyer, setBuyer] = useState({
    Nombre:'',
    Email:'',
    Telefono:''
})

const{Nombre, Email, Telefono} = buyer

const handleInputChange = (e) => {
    setBuyer(({
        ...buyer,
        [e.target.name] : e.target.value
    }))
   }

    const generateOrder = async(data) => {
        try {
            const col = collection(db, "Orders") 
            const order = await addDoc(col,data)
            console.log("order", order)
            console.log("order",order.id)
        } catch (error){
            console.log(error)

        }
    }


   const handleSubmit = (e) => {
       e.preventDefault()
       const dia = new Date()
       const items = cartList.map(e => {return {id:e.id,title:e.name, price:e.price,amount:e.amount}})
       const total = totalPrice ()
       const data = {buyer,items, dia, total}
       console.log("data", data)
       generateOrder(data)

   }



  return (
      <>
    <h1>Deja tus datos para finalizar la compra</h1>
    <hr />
    <h4>Completar</h4>
    <br />
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="Nombre"
        placeholder="Nombre"
        value={Nombre}
        onChange={handleInputChange}
         />

         <input 
         type= "number"
         name="Telefono"
         placeholder="Telefono"
         value={Telefono}
         onChange={handleInputChange}
         />

         <input 
         type= "email"
         name="Email"
         placeholder="Email"
         value={Email}
         onChange={handleInputChange}
         />
    </form>

    <input type= "submit" 
    value="Finalizar Compra"
    className="btn btn-sucess"/>
    </>
  )
}

export default Checkout