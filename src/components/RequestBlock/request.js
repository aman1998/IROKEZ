import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'

const CalendarBlock = () => {
  return (
    <BlockTemplate title={'Запросы'} count='1'>
    {/* Блок с запросами */}
      <div className={styles.blockContent}>
        <div>У вас <span>2 несогласованных запроса</span> от сотрудников: <b>Петров Алексей 
            и Шишкин Егор</b>
        </div>
      </div>
    </BlockTemplate>
  )
}

export default CalendarBlock
