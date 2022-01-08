import {FC, useEffect, useState} from "react"
import styles from "./searchimput.module.css"

interface Props {
  SendText?: (value:string) => void,
  placeHolder?: string,
  theme?: string
  Icon?: any
  value?: string
  readOnly?: boolean
}

const SearchImput:FC<Props> = ({SendText, placeHolder, Icon,value, readOnly}) => {
  const [inputText,setInputText] = useState<string>()
  useEffect(() => {
    const inputTimeOut = setTimeout(() => {
      SendText(inputText)
    },500)
    return () => {
      clearInterval(inputTimeOut)
    }
  },[inputText])
  return (
    <div className={styles.Container}>
      <i> {Icon} </i>
      <input value={value} readOnly={readOnly} type="text" placeholder={placeHolder} onChange={(e) => {setInputText(e.target.value)}} />
    </div>
  );
};

export default SearchImput;

SearchImput.defaultProps = {
  placeHolder: "type something..."
}