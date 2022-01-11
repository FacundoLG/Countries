import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getCountries} from "../../services/getCountries.js"
const Country = () => {
    const [countryInfo,setCountryInfo] = useState()
    const {flag} = useParams()
    useEffect(() => {
        getCountries(flag,"All",true).then((data) => {
            console.log(data.data[0])
            setCountryInfo(data.data[0])
        })
    },[])

    return (
        <div>
            <p>{flag}</p>
        </div>
    )
}

export default Country
