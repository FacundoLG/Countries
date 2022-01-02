import {FC} from "react"
import styles from "./countryfinder.module.css"
interface Props {
  SendText?: () => void,
  placeHolder: string
}

const CountryFinder:FC<Props> = ({SendText, placeHolder}) => {
  return (
    <div className={styles.Container}>
      <i>Lupa</i>
      <input type="text" placeholder={placeHolder} />
    </div>
  );
};

export default CountryFinder;

CountryFinder.defaultProps = {
  placeHolder: "type something..."
}