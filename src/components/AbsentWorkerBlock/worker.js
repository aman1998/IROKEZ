import React from 'react'
import styles from './styles.module.scss'

const Workers = ({avatar, name, position, absentDate, reason}) => {
  return (
    // Блок с данными рабочего
    <div className={styles.worker}>
      <div className={styles.workerDecription}>
        <img src={avatar} alt='#' />
        <div>
          <div className={styles.workerName}>{name}</div>
          <div className={styles.workerPosition}>{position}</div>
        </div>
      </div>
      <div 
      // В зависимости от причины отсуствия добавляется класс для окрашивания блока с датой
        className={`${styles.workerAbsentDate} ${reason=='В отпуске' ? styles.blue : reason=='Отгул' ? styles.orange : styles.red}`}>
        {absentDate}
      </div>
    </div>
  )
}

export default Workers