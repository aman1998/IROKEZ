import React from 'react'
import Header from '../Header/header'
import Sidebar from '../Sidebar/sidebar'
import LoginBlock from '../LoginBlock/login'
import styles from './styles.module.scss'

// Обертка для всего сайта

const PageTemplate = ({children}) => {
  const [showLogin, setShowLogin ] = React.useState(true)
  return (
    <div>
      <div style={showLogin ? {opacity: 0.5, pointerEvents: 'none', position: 'fixed'} : {opacity: 1}}>
        <Header getShowLogin = {setShowLogin}/>
        <div className={`container ${styles.content}`}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </div>
      {showLogin ? <LoginBlock getShowLogin = {setShowLogin}/> : null}
    </div>
  )
}

export default PageTemplate