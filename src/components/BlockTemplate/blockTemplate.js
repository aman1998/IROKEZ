import React from 'react'
import styles from './styles.module.scss'
import Chevron from '../../assets/icons/chevron'
import ChevronIcon from '../../assets/icons/chevron2.svg'

const BlockTemplate = ({children, title, count}) => {
// Этот компонент будет служить оберткой для блоков в гланом меню
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h2>{title}</h2>
        <span>{count}</span>
      </div>
      <img src={ChevronIcon} alt='#' className={styles.chevronLeft}/>
      {children}
      <img src={ChevronIcon} alt='#' className={styles.chevronRight}/>
      {title != 'Водопад событии' ? 
        <div className={styles.blockLink}>
          <div>{title}</div>
          <Chevron />
        </div> : 
        <div className={styles.blockLink}></div>
      }

      {/* Точки перехода для слайдера */}
      <div className={styles.points}>
        <div className={styles.pointsLeft}></div> 
        <div className={styles.pointsRight}></div> 
      </div>
    </div>
  )
}

export default BlockTemplate