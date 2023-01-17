import { useContext } from "react"
import Switch from "react-switch"
import { Container } from './styles'
import { ThemeContext } from 'styled-components'


export default function Toggle({ toggleTheme }) {


    const { title } = useContext(ThemeContext)


    return (
        <Container>

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#FFFF00'}
            />

        </Container>
    )
}










