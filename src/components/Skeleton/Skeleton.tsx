import { FC } from "react"
import styles from "./skeleton.module.css"
interface SkeletonParams {
    width?: string,
    height?: string,
    margin?: string
}

const Skeleton:FC<SkeletonParams>  = ({width,height,margin}) => {
    return (
        <div className={styles.Container} style={{width,height,margin}}>
            
        </div>
    )
}

export default Skeleton
