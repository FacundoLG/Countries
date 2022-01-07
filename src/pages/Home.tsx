import CountryFinder from "../components/CountryFinder/CountryFinder";
import styles from "./home.module.css";
import FlagCard from "../components/FlagCard/FlagCard";
import { FC, useEffect, useState } from "react";
import ThemeMode from "../components/ThemeMode/ThemeMode";
import {getCountries} from "../services/getCountries.js"
import Skeleton from "../components/Skeleton/Skeleton";
const Home:FC = () => {
  const [countries,setCountries] = useState(null)
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    getCountries().then((data) => {
      setCountries(data)
    }).then(() => {
      setLoading(false)
    })
  },[])
  console.log(countries)
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <h1>Countries</h1>
        <ThemeMode/>
      </header>
      <CountryFinder />
      <div
      className={styles.CardContainer}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {!loading? countries?.map((data) => (
          <FlagCard countryName={data.name.common}image={data.flags.png} region={data.region} population={data.population}/>
         )) : (
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
