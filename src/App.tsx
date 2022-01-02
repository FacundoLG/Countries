import { FC } from 'react';
import CountryFinder from "./components/CountryFinder/CountryFinder"
const App:FC = () => (
  <div>
    <CountryFinder placeHolder='Search for a country' SendText={() => { console.log()}}/>
  </div>
);

export default App;
