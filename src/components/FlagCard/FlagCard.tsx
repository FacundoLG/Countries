import { FC } from "react"
import styles from "./flagcard.module.css"

export interface FlagCardProps {
    countryName: string,
    population: number,
    region: string,
    image: string
}

const FlagCard:FC<FlagCardProps> = ({countryName,population,region,image}) => {
    return (
        <div className={styles.Container}>
            {image && (<> <img className={styles.Flag} src={image} alt="" />
            <div className={styles.Data}>
                <p className={styles.Title}>{countryName}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
            </div></>)  }
        </div>
    )
}

export default FlagCard
