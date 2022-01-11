import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getCountries} from "../../services/getCountries.js"
import styles from "./country.module.css"
const Country = () => {
    const [countryInfo,setCountryInfo] = useState<any>({})
    const {flag} = useParams()
    useEffect(() => {
        getCountries(flag,"All",true).then((data) => {
            console.log(data.data[0])
            setCountryInfo(data.data[0])
        })
    },[])
    return (
        <div>
            <div className={styles.FlagContainer}>
                <img src={countryInfo?.flags?.png} alt="" />
                <div>
                    <p className={styles.Title}>{countryInfo?.name?.common}</p>
                    <p>Population: {countryInfo?.population}</p>
                    <p>Timezones: {countryInfo?.timezones }</p>
                    <a href={"https://en.wikipedia.org/wiki/"+ countryInfo?.name?.common} target="_blank">More Info</a>
                </div>
            </div>
            
        </div>
    )
}

export default Country
