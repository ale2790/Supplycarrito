import {useContext } from "react"
import { Context } from "../../Context/Context"

import NavBar from "../Navbar/Navbar"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"

import './CartContent.css'

const CartContent = () => {
  const {cart} = useContext(Context)
  return (
    <>
    <NavBar/>
    {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Tu carrito está vacío </h2>
      )}
    </>
  )
}

export default CartContent