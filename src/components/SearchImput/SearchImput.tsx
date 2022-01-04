import {FC} from "react"
import styles from "./searchimput.module.css"

interface Props {
  SendText?: () => void,
  placeHolder?: string,
  theme?: string
  Icon?: any
}

const SearchImput:FC<Props> = ({SendText, placeHolder, Icon}) => {
  return (
    <div className={styles.Container}>
      <i> {Icon} </i>
      <input type="text" placeholder={placeHolder} />
    </div>
  );
};

export default SearchImput;

SearchImput.defaultProps = {
  placeHolder: "type something..."
}