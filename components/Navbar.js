import Link from 'next/link'
import { useContext, useState } from 'react'
import { SearchContext } from '../contexts/SearchContext'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  const {setSearch} = useContext(SearchContext)

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.item} ${styles.search}`}>
        <i className="fa fa-search"></i>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
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