import React from 'react'
import styles from './styles.module.scss'
import Logo from '../../assets/icons/Logo.svg'
import Bell from '../../assets/icons/bell.svg'
import Avatar from '../../assets/icons/avatar.svg'
import Chevron from '../../assets/icons/chevron.svg'

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.headerWrapper}`}>
        <img src={Logo} className={styles.logo}/>
        <div>
          <div className={styles.message}>
            <img src={Bell} className={styles.bell}/>
            <div>Сообщений нет</div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileInfo}>
              <div className={styles.profileName}>Александров Александр</div>
              <div className={styles.profilePosition}>Генеральный директор</div>
            </div>
            <img src={Avatar} alt='#' className={styles.profileAvatar}/>
            <img src={Chevron} alt='#'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header