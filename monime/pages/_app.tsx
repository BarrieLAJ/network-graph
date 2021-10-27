import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';

// import {ConfigProvider} from 'antd'

// ConfigProvider.config({
//   theme: {
//     primaryColor: 
//   }
// })

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
