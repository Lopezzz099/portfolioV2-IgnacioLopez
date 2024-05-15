import React from 'react'
import styles from './Nav.module.css'
import DrawerSection from '../DrawerSection/DrawerSection'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.sectionNav}>
            <div className={styles.logoText}>
                <p className={styles.firstText}>Ignacio Lopez</p>
                <p className={styles.secondText}>Front-End</p>
            </div>
            <DrawerSection/>
        </div>
    </nav>
  )
}

export default Nav