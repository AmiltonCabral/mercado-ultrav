import MainContainer from '../components/MainContainer'
import '../styles/globals.css'

// $npm i react-scripts
function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
