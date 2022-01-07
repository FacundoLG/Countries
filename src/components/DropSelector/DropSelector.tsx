import styles from "./dropselector.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import SearchImput from "../SearchImput/SearchImput"
import { FC, useEffect, useState } from "react"

interface DropProps {
  clickData?: String,
  options: Array<string>
}

const DropSelector:FC<DropProps> = ({clickData,options}) => {
  const [dropState,setDropState] = useState<boolean>(false)
  const [actieOption,setActiveOption] = useState<string>("All")  
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
                {options.map((name,i) => (
                  <li key={name + "_" + i} onClick={() => {setActiveOption(name)}}>{name}</li>
                ))}

              </ul>
            </div>
        </div>
    )
}

export default DropSelector
