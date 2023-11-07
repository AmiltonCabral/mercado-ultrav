import MainContainer from "../components/MainContainer";
import { CartProvider } from "../contexts/CartContext";
import { SearchProvider } from "../contexts/SearchContext";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <CartProvider>
        <MainContainer>
          <Script src="http://localhost:3011/public/telemetry.js"></Script>
          <Component {...pageProps} />
        </MainContainer>
      </CartProvider>
    </SearchProvider>
  );
}

export default MyApp;
