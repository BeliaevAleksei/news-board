import React, { useMemo } from 'react'
import classNames from 'classnames'
import { TAG } from '../../../classes/models/INews'
import styles from './TagView.module.scss'

interface IProps {
  tag: TAG
}

const TagView = ({ tag }: IProps) => {
  const backgroundColor = useMemo(() => {
    switch (tag) {
      case TAG.Hot:
        return styles.hot
      case TAG.Instagram:
        return styles.instagram
      case TAG.Vk:
        return styles.vk
      case TAG.Weekly:
        return styles.weekly
      default:
        return styles.hot
    }
  }, [tag])

  return (
    <div className={styles.root}>
      <div className={classNames(styles.text, backgroundColor)}>{tag}</div>
    </div>
  )
}

export default TagView
