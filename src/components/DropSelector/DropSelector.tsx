import styles from "./dropselector.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import SearchImput from "../SearchImput/SearchImput"
const DropSelector = () => {
    const dropDown = () => {

    }
    return (
        <div className={styles.Container}>
             <SearchImput Icon={<RiArrowDropDownLine onClick={dropDown}/>}/>
           <div className={styles.DropBox}> 
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
