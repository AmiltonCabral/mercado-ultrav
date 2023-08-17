import { useContext, useState } from "react";
import Head from "next/head";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import styles from "../styles/Home.module.css";
import { SearchContext } from "../contexts/SearchContext";
import { Product } from "../types/Product";
import { products } from "../mock/products";

export async function getStaticProps() {
  return {
    props: {
      products,
    },
  };
}

interface HomeProps {
  products: Product[] | undefined;
}

export default function Home({ products }: HomeProps) {
  const { search } = useContext(SearchContext);

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const ITEMS_PER_PAGE = 9;

  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * ITEMS_PER_PAGE;

  const currentPageProducts = filteredProducts?.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  return (
    <>
      <Head>
        <title>{"Ultra V - Buy planets on sale"}</title>
        <meta name="keyworkds" content="Planets, Moons, Stars"></meta>
        <meta name="description" content="Buy planets on sale"></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <div className={styles.title_container}>
        <h1 className={styles.title}>Our products</h1>
      </div>

      <div className={styles.product_container}>
        {currentPageProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={filteredProducts?.length ?? 0}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
