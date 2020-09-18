import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 
import Chevron from '../../assets/icons/chevron.svg'
import Fanki from '../../assets/icons/Fanki'
import Flash from '../../assets/icons/flash'
import QuestionIcon from '../../assets/icons/question'
import CalendarIcon from '../../assets/icons/calendar'
import BookIcon from '../../assets/icons/book'
import CheckmarkIcon from '../../assets/icons/checkmark-circle-2'
import NewsIcon from '../../assets/icons/book-open'
import StatisticsIcon from '../../assets/icons/trending-up'
import MessageIcon from '../../assets/icons/message-circle'
import StructureIcon from '../../assets/icons/copy'
import PeopleIcon from '../../assets/icons/people'
import SettingsIcon from '../../assets/icons/settings'
import LayersIcon from '../../assets/icons/layers'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(true)
  const [showSidebarAdmin, setShowSidebarAdmin] = React.useState(true)

  const sidebarItem = [
    { id: 1, link: '/', text: 'Главная', icon: <Fanki /> },
    { id: 2, link: '/inquiries', text: 'Запросы', icon: <Flash /> },
    { id: 3, link: '/calendar', text: 'Календарь', icon: <CalendarIcon /> },
    { id: 4, link: '/database', text: 'База знаний', icon: <BookIcon /> },
    { id: 5, link: '/news', text: 'Новости', icon: <NewsIcon /> },
    { id: 6, link: '/tasks', text: 'Задачи', icon: <CheckmarkIcon /> },
    { id: 7, link: '/chats', text: 'Чаты', icon: <MessageIcon /> },
  ]
  const sidebarItemAdmin = [
    { id: 1, link: '/statistics', text: 'Статистика', icon: <StatisticsIcon /> },
    { id: 2, link: '/structure', text: 'Структура', icon: <StructureIcon /> },
    { id: 3, link: '/people', text: 'Сотрудники', icon: <PeopleIcon /> },
    { id: 4, link: '/database', text: 'База знаний', icon: <BookIcon /> },
    { id: 5, link: '/news', text: 'Новости', icon: <NewsIcon /> },
    { id: 6, link: '/settings', text: 'Настройки', icon: <SettingsIcon /> },
    { id: 7, link: '/layers', text: 'Служба поддержки', icon: <LayersIcon /> },
  ]
  
  return (
    <aside>
      <nav className={`${styles.sidebar}`}>

      {/* Навигация для работников */}
        <div>
          <h2 className={styles.sidebarTitle}>
            <div>Компания</div>
            <img 
              src={Chevron} alt='#' 
              onClick={() => setShowSidebar(!showSidebar)}
              style= { showSidebar ? {transform: 'rotate(-180deg)'} : {transform: 'rotate(360deg)'}}
              />
          </h2>

          {/* В зависимости от значения showSidebar показывается навигация, по умолчанию они показывается */}
          {showSidebar ? 
          <ul className={styles.sidebarItems}>
          {
            sidebarItem.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={styles.sidebarItem}
                activeClassName={styles.active}
                exact
              >
                <div>
                  <div className={styles.sidebarItemIcon}>{item.icon}</div>
                  <div className={styles.sidebarItemText}>{item.text}</div>
                </div>
                <div className={styles.itemHint}><QuestionIcon /></div>
              </NavLink>
            ))
          }
          </ul> : ''}
        </div>
        <div>

        {/* Навигация для администрации */}
          <h2 className={`${styles.sidebarTitle} ${styles.sidebarTitleAdmin}`}>
            <div>Администратор</div>
            <img 
              src={Chevron} alt='#' 
              onClick={() => setShowSidebarAdmin(!showSidebarAdmin)}
              style= { showSidebarAdmin ? {transform: 'rotate(-180deg)'} : {transform: 'rotate(360deg)'}}
              />
          </h2>

          {/* В зависимости от значения showSidebarAdmin показывается навигация, по умолчанию они показывается */}
          {showSidebarAdmin ?
          <ul className={styles.sidebarItems}>
            {
              sidebarItemAdmin.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={styles.sidebarItem}
                  activeClassName={styles.active}
                  exact
                >
                  <div>
                    <div className={styles.sidebarItemIcon}>{item.icon}</div>
                    <div className={styles.sidebarItemText}>{item.text}</div>
                  </div>
                  <div className={styles.itemHint}><QuestionIcon /></div>
                </NavLink>
              ))
            }
          </ul> : ''}
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar