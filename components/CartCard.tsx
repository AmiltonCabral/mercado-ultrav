import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../types/Product";
import styles from "../styles/CartCard.module.css";

interface Props {
  product: Product;
  index: number;
}

export default function CartCard({ product, index }: Props) {
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <div className={styles.cart_card}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/images/${product.image}`}
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
          onClick={() => removeItemFromCart(index)}
        >
          Remove product
        </a>
      </div>
    </div>
  );
}
