import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function Card({product}) {
  return (
    <div className={styles.card}>
      <Image
        src={`/images/${product.image}.png`}
        width="200px"
        height="200px"
        alt={product.name}
      />
      <h3>{product.name}</h3>
    </div>
  )
}