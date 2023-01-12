import { createContext, useState } from 'react';
import Menu from '../Components/Menu/Menu'
import GlobalStyle from '../styles/global'

export const ThemeContext = createContext()

function MyApp({ Component, pageProps }) {

  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)

  return (
    <ThemeContext.Provider value={{ sideBar, setSideBar, showSideBar }}>


      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />

    </ThemeContext.Provider >

  )

}

export default MyApp
