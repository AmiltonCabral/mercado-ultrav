import Head from 'next/head'
import styles from '../styles/Home.module.css'

//<div className={styles.container}>
export default function Home() {
  return (
    <>
      <Head>
        <title>Ultra V - Buy planets on sale</title>
        <meta name="keyworkds" content="Planets, Moons, Suns"></meta>
        <meta name="description" content="Buy planets on sale"></meta>
      </Head>
      <div>
        <h1>Hello Next JS</h1>
      </div>
    </>
  )
}
