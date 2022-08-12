import Navbar from "./Navbar"
import Footer from "./Footer"

import styles from '../styles/MainContainer.module.css'
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function MainContainer({children}: Props) {
  return (
    <>
      <Navbar />
        <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}