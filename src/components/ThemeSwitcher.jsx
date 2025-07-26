import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeSwitcher = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleTheme = () => {
        setTheme("dark");
        if(theme === "dark"){
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }

  return (
    <>
        {theme === "light" ?
        <i onClick={handleTheme} className="ri-moon-line text-xl"></i>
            :
            <i onClick={handleTheme} className="ri-sun-line text-xl"></i>
        }

        
    </>
  )
}

export default ThemeSwitcher
