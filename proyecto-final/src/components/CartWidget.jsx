import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './CartContextProvider';
import imgLogoCarrito from './NavBar/Imagenes/carrito-de-compras.png';
import './CartWidget.css';


const CartWidget = () => {
  const {totalCount} = useCartContext();
  return (
    <NavLink to= '/cart'>
    <a href="#"><img width="50" src={imgLogoCarrito} alt="Logo Carrito"/></a>
    <span className='units'>{totalCount()}</span></NavLink>
  );
};

export default CartWidget