import CountryFinder from "../components/CountryFinder/CountryFinder";
import styles from "./home.module.css";
import FlagCard from "../components/FlagCard/FlagCard";
const Home = () => {
  return (
    <div className={styles.Container}>
      <CountryFinder />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <FlagCard />
        <FlagCard />
        <FlagCard />
        <FlagCard />
        <FlagCard />
        <FlagCard />
        <FlagCard />
      </div>
    </div>
  );
};

export default Home;
