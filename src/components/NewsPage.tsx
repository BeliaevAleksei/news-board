import React from 'react'
import { useBounce } from '../classes/useBounce'
import styles from './NewsPage.module.scss'
import Header from './newsPage/Header'
import NewsView from './newsPage/NewsView'

const NewsPage = () => {
  const { test, setTest } = useBounce()
  return (
    <div className={styles.root}>
      <button
        onClick={() => {
          setTest(test + 1)
        }}>
        Click
      </button>
      <p>{test}</p>
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
