import React from 'react'
import styles from './Header.module.scss'
import DateView from './header/DateView'
import LogoView from './header/LogoView'

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.date}>
        <DateView />
      </div>
      <div className={styles.logo}>
        <LogoView imageUrl="" />
      </div>
    </div>
  )
}

export default Header
