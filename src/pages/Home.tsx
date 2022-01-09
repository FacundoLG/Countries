import styles from "./home.module.css";
import { FC, useEffect, useState } from "react";
import CountryFinder from "../components/CountryFinder/CountryFinder";
import {getCountries} from "../services/getCountries.js"
import FlagCard from "../components/FlagCard/FlagCard";
import ThemeMode from "../components/ThemeMode/ThemeMode";
import Skeleton from "../components/Skeleton/Skeleton";
import SearchImput from "../components/SearchImput/SearchImput";
import DropSelector from "../components/DropSelector/DropSelector";
import { FiSearch } from "react-icons/fi";
const Home:FC = () => {
  const Continents = ["All","America","Europe","Africa","Asia","Oceania"]
  const [countries,setCountries] = useState(null)
  const [loading,setLoading] = useState(true)
  const [textInputValue,setTextInputValue] = useState<string>()
  const [optionValue,setOptionValue] = useState<string>()
  
  const handleGetCountries = (name?:string,region?:string) => {
    setLoading(true)
    getCountries(name,region || null).then((data) => {
      if(data.data.status == 404) {
        setCountries(null)
        throw new Error(data.data.message)}
      setCountries(data?.data)
    }).then(() => {
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
        handleGetCountries(textInputValue,optionValue)
  },[textInputValue,optionValue])

  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <h1>Countries</h1>
        <ThemeMode/>
      </header>
      <CountryFinder>
         <SearchImput SendText={(value) => {setTextInputValue(value)}} Icon={<FiSearch/>}/>
              <DropSelector SendOption={(option => setOptionValue(option))} options={Continents}/> 
      </CountryFinder>
      <div
      className={styles.CardContainer}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!loading? 
          countries? 
            countries?.map((data) => (
            <FlagCard key={data.name.common + "__"} countryName={data.name.common}image={data.flags.png} region={data.region} population={data.population}/>
            )) : 
            (<p>Not found</p>) 
          : (
          <>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
            <Skeleton width="260px" height="260px" margin="var(--space-1)"/>
          </>
         ) 
          }
  
      </div>
    </div>
  );
};

export default Home;
