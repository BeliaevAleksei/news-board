import React, { useEffect, useState } from 'react'
import { getFormatDate } from '../../../classes/helpers/DateHelper'
import styles from './DateView.module.scss'

const DateView = () => {
  const [time, setTime] = useState(getFormatDate(new Date(), 'time'))
  const [day, setDay] = useState(getFormatDate(new Date(), 'dayMonth'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getFormatDate(new Date(), 'time'))
      setDay(getFormatDate(new Date(), 'dayMonth'))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.time}>{time}</div>
      <div className={styles.day}>{day}</div>
    </div>
  )
}

export default DateView
