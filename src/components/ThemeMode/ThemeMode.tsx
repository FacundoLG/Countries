import {FC, useEffect, useState} from 'react'
import styles from "./thememode.module.css"
import Sun from "../svgs/Sun"
import Moon from "../svgs/Moon"
const ThemeMode:FC = () => {
    const [themeMode,setThemeMode] =  useState(localStorage.getItem("theme") || "light")

    useEffect(() =>{
        document.documentElement.setAttribute("data-theme",themeMode)
        localStorage.setItem("theme", themeMode)
    },[themeMode])
    
const changeThemeMode = () => {
        setThemeMode(themeMode === "light"? "dark": "light")
    }
    return (
        <button className={styles.Container} style={{display: "flex"}}  onClick={() => {changeThemeMode()}}>
            {themeMode == "light"? <Sun data-testid="sun"/> : <Moon data-testid="moon" />  } 
        </button>
    )
}

export default ThemeMode
