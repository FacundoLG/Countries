import styles from "./dropselector.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import SearchImput from "../SearchImput/SearchImput"
import { FC, useEffect, useState } from "react"

export interface DropProps {
  SendOption?: (option:string) => void,
  clickData?: string,
  options: Array<string>
}

const DropSelector:FC<DropProps> = ({options,SendOption}) => {
  const [dropState,setDropState] = useState<boolean>(false)
  const [activeOption,setActiveOption] = useState<string>("All")  
  const [clickID,setClickID] = useState()
  
  const sendClickID= (e) => {
        setClickID(e.target.id)
  }
    
  useEffect(() => {
      document.addEventListener("click",sendClickID)
      return () => {
          document.removeEventListener("click",sendClickID)
      }
  },[])
 
  useEffect(() => {
      if(clickID == "Drop"){
        setDropState(!dropState)
      }else{
        setDropState(false)
      }
    },[clickID])

  useEffect(() => {
    SendOption(activeOption)
  },[activeOption])
    return (
        <div className={styles.Container}>
             <SearchImput readOnly={true} value={activeOption}  Icon={<RiArrowDropDownLine id={dropState? "" : "Drop"} className={styles.DropIcon}/>}/>
           <div className={`${styles.DropBox} ${dropState? "" : styles.HideDropBox}`}> 
            <ul className={styles.Drop}>
                {options.map((name,i) => (
                  <li key={name + "_" + i} onClick={() => {setActiveOption(name)}}>{name}</li>
                ))}

              </ul>
            </div>
        </div>
    )
}

export default DropSelector
