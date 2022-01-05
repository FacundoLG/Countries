import {FC} from "react"
import styles from "./searchimput.module.css"

interface Props {
  SendText?: () => void,
  placeHolder?: string,
  theme?: string
  Icon?: any
  value?: string
  readOnly?: boolean
}

const SearchImput:FC<Props> = ({SendText, placeHolder, Icon,value, readOnly}) => {
  return (
    <div className={styles.Container}>
      <i> {Icon} </i>
      <input value={value} readOnly={readOnly} type="text" placeholder={placeHolder} />
    </div>
  );
};

export default SearchImput;

SearchImput.defaultProps = {
  placeHolder: "type something..."
}