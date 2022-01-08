import { FC} from 'react'
import styles from "./countryfinder.module.css"
const CountryFinder:FC = ({children}) => {
    return (
        <div className={styles.Container}>
          {children} 
        </div>
    )
}

export default CountryFinder
