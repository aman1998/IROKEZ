import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'

const CalendarBlock = () => {
  return (
    <BlockTemplate title={'Календарь'} count='1'>
      <div className={styles.blockContent}>
        <div className={styles.calendar}>
          <div className={styles.calendarDate}>
            <div className={styles.calendarDateMonth}>АВГ</div>
            <div className={styles.calendarDateNum}>20</div>
          </div>
          <div className={styles.calendarTime}>10:00 - 11:00  |  Групповое событие</div>
          <div className={styles.calendarTitle}>Презентация мобильной системы</div>
        </div> 
      </div>
    </BlockTemplate>
  )
}

export default CalendarBlock
