import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const api = 'http://localhost:3000/api/products'

  const res = await fetch(`${api}`)
  const data = await res.json()

  return {
    props: {
      products: data.planets,
    },
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Ultra V - Buy planets on sale</title>
        <meta name="keyworkds" content="Planets, Moons, Suns"></meta>
        <meta name="description" content="Buy planets on sale"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <div className={styles.title_container}>
        <h1 className={styles.title}>Our products</h1>
      </div>

      <div>
        <div className={styles.product_container}>
          {products.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))}
        </div>
      </div>
    </>
  )
}
