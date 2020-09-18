import React from 'react'
import Header from '../Header/header'
import Sidebar from '../Sidebar/sidebar'
import styles from './styles.module.scss'

// Обертка для всего сайта

const PageTemplate = ({children}) => {
  return (
    <div>
      <Header />
      <div className={`container ${styles.content}`}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default PageTemplate