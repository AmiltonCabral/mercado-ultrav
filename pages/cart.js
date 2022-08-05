import Head from "next/head"
import CartCard from "../components/CartCard"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export default function Cart() {

  const { cart, clearCart, totalPrice } = useContext(CartContext)

  return (
    <>
      <Head>
        <title>Your planets Cart</title>
      </Head>
      <h1>Carrinho de Compras</h1>

      <h3>Quantidade itens: {cart.length}</h3>

      <button
        onClick={() => clearCart()}>
        Clear Cart
      </button>

      <div>
        {cart.map((product, index) =>
          <CartCard key={index} product={product} index={index}/>
        )}
      </div>

      <h3>Preço total: R$ {totalPrice()}</h3>
    </>
  )
}