import styles from "./flagcard.module.css"
const FlagCard = () => {
    return (
        <div className={styles.Container}>
            <img className={styles.Flag} src="" alt="" />
            <div className={styles.Data}>
                <p className={styles.Title}>Argentina</p>
                <p>Population: {"213123.213"}</p>
                <p>Language: Spanish</p>
            </div>
        </div>
    )
}

export default FlagCard
