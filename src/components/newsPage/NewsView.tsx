import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { TEMPLATE } from '../../classes/models/INews'
import styles from './NewsView.module.scss'
import TagView from './newsView/TagView'
import TextTemplate from './newsView/TextTemplate'

const NewsView = () => {
  const news = useAppSelector((state) => state.news)
  return (
    <div className={styles.root}>
      {news.map((item) => {
        return (
          <>
            {item.Tag ? <TagView tag={item.Tag} /> : null}
            {item.Template === TEMPLATE.Text ? (
              <div className={styles.template}>
                <TextTemplate news={item} />{' '}
              </div>
            ) : null}
          </>
        )
      })}
    </div>
  )
}

export default NewsView
