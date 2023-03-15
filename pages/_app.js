import '@/styles/globals.css'
import Nav from './nav'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function App({ Component, pageProps }) {
  return <>
  <Nav/>
   <Component {...pageProps} />
  </>
}
