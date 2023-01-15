import { createContext, useState } from 'react';
import Menu from '../Components/Menu/Menu'
import GlobalStyle from '../styles/global.js'
import { ThemeProvider } from 'styled-components'
import usePersistedState from './../utils/usePersistedState'
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export const ThemeContext = createContext()


function MyApp({ Component, pageProps }) {

  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)

  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }



  return (

    <ThemeProvider theme={theme}>

      <ThemeContext.Provider value={{ sideBar, setSideBar, showSideBar }}>

        <GlobalStyle />

        <Menu toggleTheme={toggleTheme} />
        <Component {...pageProps} />

      </ThemeContext.Provider >
    </ThemeProvider>



  )

}

export default MyApp
