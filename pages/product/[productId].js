import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import styles from "../../styles/Product.module.css"

export const getStaticPaths = async () => {
  const api = 'http://localhost:3000/api/products'

  const res = await fetch(`${api}`)

  const data = await res.json()

  const paths = data.planets.map((planet) => {
    return {
      params: { productId: planet.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.productId

  const api = await fetch(`http://localhost:3000/api/products/`)

  const data = await api.json()

  return {
    props: {product: data.planets[id-1]}
  }
}

export default function Produto({product}) {

  const { cart, addItemToCart } = useContext(CartContext)

  return (
    <div className={styles.product_container}>
      <Image
        src={`/images/${product.image}.png`}
        width="400px"
        height="400px"
        alt={product.name}
      />
      <div className={styles.product_status}>
        <h2>{product.name}</h2>
        <h5><s>R$ {product.price*1.20}</s></h5>
        <h3 color="blue">R$ {product.price}</h3>
        <h5>Até 6x de R$ {product.price / 6} sem juros</h5>
        <button
          onClick={() => addItemToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}