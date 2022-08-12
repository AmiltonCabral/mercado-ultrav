import { createContext, ReactNode, useState } from "react"
import { Product } from "../types/Product"

type cartContextType = {
  cart: Product[],
  addItemToCart: (product: Product) => void,
  removeItemFromCart: (itemIndex: number) => void,
  clearCart: () => void,
  totalPrice: () => number
}

const cartContextDefaultValues: cartContextType = {
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  totalPrice: () => 0
}

export const CartContext = createContext<cartContextType>(cartContextDefaultValues)

type Props = {
  children: ReactNode
}

export const CartProvider = ({ children }: Props) => {

  const [cart, setCart] = useState<Product[]>([])

  const addItemToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeItemFromCart = (itemIndex: number) => {
    const newCart = cart.filter((_, index) =>
      index !== itemIndex
    )
    setCart(newCart)
  }

  function clearCart() {
    setCart([])
  }

  function totalPrice() {
    const totalPrice: number = cart.map((product) => product.price).reduce((previousV, currentV) =>
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