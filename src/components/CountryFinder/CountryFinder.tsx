import React, { useEffect, useState } from 'react'
import styles from "./countryfinder.module.css"
import DropSelector from '../DropSelector/DropSelector'
import SearchImput from '../SearchImput/SearchImput'
import {FiSearch} from "react-icons/fi"
import ThemeMode from '../ThemeMode/ThemeMode'
const CountryFinder = () => {
    const Continents = ["Gobal","America","Europe","Africa","Asia","Australia"]
    const [clickID,setClickID] = useState()
    useEffect(() => {
        document.addEventListener("click",sendClickID)
        return () => {
            document.removeEventListener("click",sendClickID)
        }
    },[])
    
    const sendClickID= (e) => {
        setClickID(e.target.id)
    }
    
    return (
        <div className={styles.Container}>
            <SearchImput Icon={<FiSearch/>}/>
            <div className={styles.RSide}>
              <ThemeMode/>
              <DropSelector options={Continents} clickData={clickID}/> 
            </div>
        </div>
    )
}

export default CountryFinder
