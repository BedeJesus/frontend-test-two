import { useContext } from "react"
import Switch from "react-switch"
// import { ThemeContext } from "../../App"

export default function Toggle() {

    

    function handleThemeToggle() {
        setTheme(theme === 'light' ? 'dark': 'light')
    }

    return (
        <div className="toggle">
            <Switch
                onChange={handleThemeToggle}
                uncheckedIcon={false} 
                checkedIcon={false}
                onColor={'#FFFF00'}/>

        </div>
    )
}










