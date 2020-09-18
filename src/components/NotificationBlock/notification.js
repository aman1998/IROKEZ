import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'
import avatar from '../../assets/icons/1.svg'

const NotificationBlock = () => {
  return (
    <BlockTemplate title={'Уведомления'} count='2'>

    {/* Блок с уведомлениями */}
      <div className={styles.block}>
        <div className={styles.content}>
          <img src={avatar} alt='#' className={styles.contentAvatar}/>
          <div className={styles.contentText}>
            <div className={styles.contentTextName}>Владимиров Владимир <span>9:22</span></div>
            <div className={styles.contentTextTheme}>НАЗНАЧАЕТ ВАМ ЗАДАЧУ</div>
            <div className={styles.contentTextTask}>Подготовить обновлённую
              презентацию разработанного
              продукта
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <img src={avatar} alt='#' className={styles.contentAvatar}/>
          <div className={styles.contentText}>
            <div className={styles.contentTextName}>Владимиров Владимир <span>9:22</span></div>
            <div className={styles.contentTextTheme}>НАЗНАЧАЕТ ВАМ ЗАДАЧУ</div>
            <div className={styles.contentTextTask}>Подготовить обновлённую
              презентацию разработанного
              продукта
            </div>
            <div className={styles.contentTextTeam}>Групповое событие</div>
          </div>
        </div>
      </div>
    </BlockTemplate>
  )
}

export default NotificationBlock
