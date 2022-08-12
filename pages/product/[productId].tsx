import Image from "next/image"
import Head from "next/head"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import styles from "../../styles/Product.module.css"
import { Product } from "../../types/Product"
import { ProductsAPI } from "../../types/ProductsAPI"
import { GetStaticProps } from "next"

export const getStaticPaths = async () => {

  const api = await fetch(`http://localhost:3000/api/products`)

  const data: ProductsAPI | undefined = await api.json()

  type Params = {
    params: {
      productId: string
    }
  }

  const paths = data?.products.map((product) => {
    return {
      params: { productId: product.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id: number = Number.parseInt(context.params?.productId as string)

  const api = await fetch(`http://localhost:3000/api/products/`)

  const data: ProductsAPI | undefined = await api.json()

  return {
    props: {product: data?.products[id-1]}
  }
}

interface ProductProps {
  product: Product;
}

export default function ProductPage({product}: ProductProps) {

  const { addItemToCart } = useContext(CartContext)

  return (
    <>
      <Head>
        <title>{product.name} at sale</title>
      </Head>

      <div className={styles.product_container}>
        <Image
          src={`/images/${product.image}`}
          width="400px"
          height="400px"
          alt={product.name}
        />
        <div className={styles.product_status}>
          <h2>{product.name}</h2>
          <h5><s>R$ {product.price*1.20}</s></h5>
          <h3 color="blue">R$ {product.price}</h3>
          <h5>6x R$ {product.price / 6}</h5>
          <button
            className={styles.add_cart}
            onClick={() => addItemToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}