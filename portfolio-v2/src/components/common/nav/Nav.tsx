import React from 'react'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.sectionNav}>
            <div className={styles.logoText}>
                <p>Ignacio Lopez</p>
                <p>Front-End</p>
            </div>
        </div>
    </nav>
  )
}

export default Nav