import {FC, useEffect, useState} from 'react'
import styles from "./thememode.module.css"
import Sun from "../svgs/Sun"
import Moon from "../svgs/Moon"
const ThemeMode:FC = () => {
    const [themeMode,setThemeMode] =  useState("light")
    useEffect(() =>{
        document.documentElement.setAttribute("data-theme",themeMode)
    },[themeMode])
    
    const changeThemeMode = () => {
        console.log("click")
        setThemeMode(themeMode === "light"? "dark": "light")
    }
    return (
        <button className={styles.Container} style={{display: "flex"}}  onClick={() => {changeThemeMode()}}>
            {themeMode == "light"? <Sun /> : <Moon/>  } 
        </button>
    )
}

export default ThemeMode
