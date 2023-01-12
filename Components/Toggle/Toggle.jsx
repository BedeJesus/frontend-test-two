import { useContext } from "react"
import Switch from "react-switch"
// import { ThemeContext } from "../../App"
import { Container } from './styles'
export default function Toggle() {



    function handleThemeToggle() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Container>

            <Switch
                onChange={handleThemeToggle}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#FFFF00'}
            />

        </Container>
    )
}










