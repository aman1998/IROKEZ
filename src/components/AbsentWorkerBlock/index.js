import React from 'react'
import styles from './styles.module.scss'
import Workers from './workers'
import Nav from './nav'
import Header from './header'
import Avatar1 from '../../assets/icons/26.svg'
import Avatar2 from '../../assets/icons/1.svg'
import Avatar3 from '../../assets/icons/14.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AbsentWorker = () => {
  return (
    <div className={styles.block}>
      <Header />
      <Nav />
      <Workers />
    </div>
  )
}

export default AbsentWorker
