import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";
import styles from "../styles/Card.module.css";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.card}>
        <Image
          src={`/images/${product.image}`}
          width="200px"
          height="200px"
          alt={product.name}
        />
        <h3 className={styles.title}>{product.name}</h3>
        <h4 className={styles.price}>R$ {product.price}</h4>
      </div>
    </Link>
  );
}
