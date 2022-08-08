import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  function addItemToCart(product) {
    setCart([...cart, product])
  }

  function removeItemFromCart(itemIndex) {
    const newCart = cart.filter((_, index) =>
      index !== itemIndex
    )
    setCart(newCart)
  }

  function clearCart() {
    setCart([])
  }

  function totalPrice() {
    const totalPrice = cart.map((product) => product.price).reduce((previousV, currentV) =>
      previousV + currentV, 0
    )
    return (totalPrice)
  }

  return (
    <CartContext.Provider value={ {cart, addItemToCart, removeItemFromCart, clearCart, totalPrice} }>
      {children}
    </CartContext.Provider>
  )
}