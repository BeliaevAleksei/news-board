import React from 'react'
import styles from './NewsPage.module.scss'
import Header from './newsPage/Header'
import NewsView from './newsPage/NewsView'

const NewsPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <NewsView />
      </div>
    </div>
  )
}

export default NewsPage
