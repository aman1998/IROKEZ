import React from 'react'
import styles from './styles.module.scss'
import Workers from './workers'
import Nav from './nav'
import Header from './header'

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
