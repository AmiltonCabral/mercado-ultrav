import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.item} ${styles.search}`}>
        <i className="fa fa-search"></i>
      </div>
      <l1 className={styles.item}>Ultra<span>V</span></l1>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}