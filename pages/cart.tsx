import Head from "next/head";
import CartCard from "../components/CartCard";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>{`Cart with ${cart.length} products`}</title>
      </Head>

      <div className={styles.cart_status}>
        <div>
          <h1>Cart</h1>
          <h3>Items: {cart.length}</h3>
        </div>
        <button className={styles.clear_cart} onClick={() => clearCart()}>
          Clear Cart
        </button>
      </div>

      <div>
        {cart.map((product, index) => (
          <CartCard key={index} product={product} index={index} />
        ))}
      </div>

      <h3>Total price: R$ {totalPrice()}</h3>
    </>
  );
}
