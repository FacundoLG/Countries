import CountryFinder from "../components/CountryFinder/CountryFinder";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.Container}>
      <CountryFinder />
    </div>
  );
};

export default Home;
