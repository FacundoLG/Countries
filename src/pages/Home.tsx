import CountryFinder from "../components/CountryFinder/CountryFinder";
import styles from "./home.module.css";
import FlagCard from "../components/FlagCard/FlagCard";
import { FC, useEffect, useState } from "react";
import ThemeMode from "../components/ThemeMode/ThemeMode";
import {getCountries} from "../services/getCountries.js"

const Home:FC = () => {
  const [countries,setCountries] = useState(null)
  useEffect(() => {
    getCountries().then(setCountries)
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
        {countries?.map((data) => (
          <FlagCard countryName={data.name.common}image={data.flags.png} region={data.region} population={data.population}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
