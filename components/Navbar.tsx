import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useRouter } from "next/router";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const { setSearch } = useContext(SearchContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.item} ${styles.search}`}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>
      <h1 className={styles.item}>
        Ultra<span>V</span>
      </h1>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a data-fs-button-cart>Cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
