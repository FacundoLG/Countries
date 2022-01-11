import React from 'react'
import ThemeMode from '../ThemeMode/ThemeMode'
import styles from "./layout.module.css"
const Layout = ({children}) => {
    return (
        <div className={styles.Container}>
          <header className={styles.Header}>
            <h1>Countries</h1>
            <ThemeMode/>
          </header>
          {children}
        </div>
    )
}

export default Layout
