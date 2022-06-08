import { useState, useContext } from "react";
import { CartContext } from "../CartContextProvider";
import db from "../../services/firebase";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Spinner from "../Spinner";




const Checkout = () => {

const {cartList, totalPrice, emptyCard}=useContext(CartContext)

const [loading , setLoading] = useState(false)
const [orderID,  setOrderID] = useState()

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

   // const generateOrder = async(data) => {
        //try {
            //const col = collection(db, "Orders") 
            //const order = await addDoc(col,data)
            //console.log("order", order)
          //  console.log("order",order.id)
        //} catch (error){
        //    console.log(error)

      //  }
    //}
const generateOrder = async(data) => {
  setLoading(true)
  try {
      const col = collection(db, "Orders")
      const order = await addDoc(col, data)
      setOrderID(order.id)
      emptyCard()
  setLoading(false)
  } catch (error) {
    console.log(error)

  }
}





   const handleSubmit = (e) => {
       e.preventDefault()
       const dia = new Date()            
       const items = cartList.map(e => { return { id: e.id, title: e.title, price: e.price, amount: e.quantity } })
       const total = totalPrice()
       const data = {buyer,items,dia,total}
       console.log("data", data)
       generateOrder(data)
       
        


   }



  return (
      <>
    <h1>Deja tus datos para finalizar la compra</h1>
    <hr />
{loading?<Spinner/> : (!orderID&&<div>

    <h4>Completar</h4>
    <br />
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="Nombre"
        placeholder="Nombre"
        value={Nombre}
        onChange={handleInputChange}
        required
         />

         <input 
         type= "number"
         name="Telefono"
         placeholder="Telefono"
         value={Telefono}
         onChange={handleInputChange}
         required
         />

         <input 
         type= "email"
         name="Email"
         placeholder="Email"
         value={Email}
         onChange={handleInputChange}
         required
         />
    

    <input type= "submit" 
    value="Finalizar Compra"
    className="btn btn-sucess"/>
    
    </form>
    </div>)}
<div>
  {
    orderID&&(
      <div> 
        <h4>Compra Finalizada con Exito</h4>
        <h4>{`Su codigo de compra es: ${orderID}`}</h4>
        <Link to="/"><h5>Realizar otra compra</h5> </Link>
        </div>
    )
  }
</div>

    </>
  )
}

export default Checkout