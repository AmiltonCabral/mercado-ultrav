import MainContainer from '../components/MainContainer'
import { CartProvider } from '../contexts/CartContext'
import '../styles/globals.css'

// $npm i react-scripts
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </CartProvider>
  )
}

export default MyApp
