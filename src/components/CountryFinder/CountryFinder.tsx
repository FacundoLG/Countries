import React from 'react'
import styles from "./countryfinder.module.css"
import DropSelector from '../DropSelector/DropSelector'
import SearchImput from '../SearchImput/SearchImput'
import {FiSearch} from "react-icons/fi"
import ThemeMode from '../ThemeMode/ThemeMode'
const CountryFinder = () => {
    return (
        <div className={styles.Container}>
            <SearchImput Icon={<FiSearch/>}/>
            <div className={styles.RSide}>
              <ThemeMode/>
              <DropSelector/> 
            </div>
        </div>
    )
}

export default CountryFinder
