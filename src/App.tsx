import React from 'react'
import styles from './App.module.scss'
import NewsPage from './components/NewsPage'

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.elipse}></div>
      <div className={styles.content}>
        <NewsPage />
      </div>
    </div>
  )
}

export default App
