import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 

const Header = () => {
  
  return (
    <div className={styles.blockHeader}>
      <div className={styles.blockHeaderTitle}>Отсутствующие сотрудники</div>
      <nav>
        <div className={styles.navLine1}></div>
        <ul>
          <li className={`${styles.dayItem} ${styles.active}`}>Сегодня, 20 авг</li>
          <li className={styles.dayItem}>Завтра, 21 авг</li>
          <li className={styles.dayItem}>Неделя</li>
        </ul>
        <div className={styles.navLine2}></div>
      </nav>
    </div>
  )
}

export default Header