import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'

const CalendarBlock = () => {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className:'sliders'
    };
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
