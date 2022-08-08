import MainContainer from '../components/MainContainer'
import { CartProvider } from '../contexts/CartContext'
import { SearchProvider } from '../contexts/SearchContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <CartProvider>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </CartProvider>
    </SearchProvider>
  )
}

export default MyApp
