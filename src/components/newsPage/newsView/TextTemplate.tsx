import React from 'react'
import { INews } from '../../../classes/models/INews'
import styles from './TextTemplate.module.scss'

interface IProps {
  news: INews
}

const TextTemplate = ({ news }: IProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{news.Title}</div>
      <div className={styles.preview}>{news.ShortContent}</div>
    </div>
  )
}

export default TextTemplate
