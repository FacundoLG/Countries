import styles from "./dropselector.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import SearchImput from "../SearchImput/SearchImput"
import { FC, useEffect, useState } from "react"

interface DropProps {
  clickData: String
}

const DropSelector:FC<DropProps> = ({clickData}) => {
  const [dropState,setDropState] = useState(false)
  const [actieOption,setActiveOption] = useState("Global")  
  useEffect(() => {
      if(clickData == "Drop"){
        setDropState(!dropState)
      }else{
        setDropState(false)
      }
    },[clickData])
    return (
        <div className={styles.Container}>
             <SearchImput readOnly={true} value={actieOption}  Icon={<RiArrowDropDownLine id={dropState? "" : "Drop"} className={styles.DropIcon}/>}/>
           <div className={`${styles.DropBox} ${dropState? "" : styles.HideDropBox}`}> 
            <ul className={styles.Drop}>
                <li>Global</li>
                <li>America</li>
                <li>Africa</li>
                <li>Europe</li>
                <li>Asia</li>
                <li>Australia</li>
              </ul>
            </div>
        </div>
    )
}

export default DropSelector
