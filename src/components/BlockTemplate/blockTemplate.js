import React from 'react'
import styles from './styles.module.scss'
import Chevron from '../../assets/icons/chevron'

const BlockTemplate = ({children, title, count}) => {
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h2>{title}</h2>
        <span>{count}</span>
      </div>
      {children}
      <div className={styles.blockLink}>
        <div>{title}</div>
        <Chevron />
      </div>
    </div>
  )
}

export default BlockTemplate