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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div>
        <h1>Hello Next JS</h1>
      </div>
    </>
  )
}
