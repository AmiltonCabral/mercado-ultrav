import styles from '../styles/CartCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export default function CartCard({product, index}) {

  const { removeItemFromCart } = useContext(CartContext)

  return (
    <div className={styles.cart_card}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/images/${product.image}.png`}
          width="70px"
          height="70px"
          alt={product.name}
          className={styles.image}
        />
      </Link>
      <div className={styles.product_status}>
        <div>
          <h3 className={styles.product_name}>{product.name}</h3>
          <h4>R$ {product.price}</h4>
        </div>
        <a
          className={styles.remove_product}
          onClick={() => removeItemFromCart(index)}>
          Remover produto
        </a>
      </div>
    </div>
  )
}