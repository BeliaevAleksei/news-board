import React from 'react'
import styles from './LogoView.module.scss'
import logo from '../../../tempImages/logo.jpg'

interface IProps {
  imageUrl: string
}

const LogoView = ({ imageUrl }: IProps) => {
  return (
    <div className={styles.root}>
      <img className={styles.logo} src={imageUrl || logo} />
      <div className={styles.comment}>Ля че сделал</div>
    </div>
  )
}

export default LogoView
