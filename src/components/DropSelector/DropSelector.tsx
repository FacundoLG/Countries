import styles from "./dropselector.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import SearchImput from "../SearchImput/SearchImput"
const DropSelector = () => {
    const dropDown = () => {
        
    }
    return (
        <div className={styles.Container}>
            <div className={styles.InputContainer}> 
             <SearchImput Icon={<RiArrowDropDownLine onClick={dropDown}/>}/>
            </div>
            <ul> 
                <li>Defaul</li>
                <li>America</li>
                <li>Africa</li>
            </ul>
        </div>
    )
}

export default DropSelector
