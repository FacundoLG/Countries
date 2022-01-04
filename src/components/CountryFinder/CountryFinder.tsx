import React from 'react'
import styles from "./countryfinder.module.css"
import DropSelector from '../DropSelector/DropSelector'
import SearchImput from '../SearchImput/SearchImput'
import {FiSearch} from "react-icons/fi"
const CountryFinder = () => {
    return (
        <div className={styles.Container}>
           <SearchImput Icon={<FiSearch/>}/>
           <DropSelector/> 
        </div>
    )
}

export default CountryFinder
