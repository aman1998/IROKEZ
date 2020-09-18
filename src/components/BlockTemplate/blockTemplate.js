import React from 'react'
import styles from './styles.module.scss'
import Chevron from '../../assets/icons/chevron'

const BlockTemplate = ({children, title, count}) => {
// Этот компонент будет служить оберткой для блоков в гланом меню
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h2>{title}</h2>
        <span>{count}</span>
      </div>
      {children}
      {title != 'Водопад событии' ? 
        <div className={styles.blockLink}>
          <div>{title}</div>
          <Chevron />
        </div> : 
        <div className={styles.blockLink}></div>
      }
    </div>
  )
}

export default BlockTemplate