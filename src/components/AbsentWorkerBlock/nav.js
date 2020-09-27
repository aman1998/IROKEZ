import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 
import icon from '../../assets/icons/bell.svg'

const Nav = () => {
  return (
    // Навигация по отсуствующим рабочим
    <nav className={styles.blockReason}>
      <NavLink 
        to='/'
        className={styles.blockReasonGreen}
        activeClassName={styles.activeGreen}
        exact
      > 
        <div className={styles.title}>Все</div> 
        <div className={styles.nums}>23 сотрудника</div>
        <img src={icon} alt='#' className={styles.icon}/>
      </NavLink>
      <NavLink 
        className={styles.blockReasonBlue}
        to='/absent/vacation'
        activeClassName={styles.activeBlue}
        exact
      >
        <div className={styles.title}>В отпуске</div> 
        <div className={styles.nums}>7 сотрудника</div>
        <img src={icon} alt='#' className={styles.icon}/>
      </NavLink>
      <NavLink 
        className={styles.blockReasonOrange}
        to='/absent/dayoff'
        activeClassName={styles.activeOrange}
        exact
      >
        <div className={styles.title}>Отгул</div> 
        <div className={styles.nums}>10 сотрудника</div>
        <img src={icon} alt='#' className={styles.icon}/>
      </NavLink>
      <NavLink 
        className={styles.blockReasonRed}
        to='/absent/sick'
        activeClassName={styles.activeRed}
        exact
      >
        <div className={styles.title}>Больничный</div> 
        <div className={styles.nums}>Нет</div>
        <img src={icon} alt='#' className={styles.icon}/>
      </NavLink>
    </nav>
  )
}

export default Nav