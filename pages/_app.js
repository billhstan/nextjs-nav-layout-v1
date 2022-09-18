import '../styles/globals.css'
import Layout from '../components/Layout';
import {UserProvider} from '../components/UserContext';
function MyApp({ Component, pageProps }) {
  return (

    <UserProvider>
  <Layout>  
  <Component {...pageProps} />
  </Layout>
  </UserProvider>

);/* end of the return() */

}

export default MyApp
