import React from 'react'
import PageTemplate from '../components/PageTemplate/pageTemplate'
import styles from './styles.module.scss'
import BaseBlock from '../components/BaseBlock/base'
import CalendarBlock from '../components/CalendarBlock/calendar'
import RequestBlock from '../components/RequestBlock/request'
import NotificationBlock from '../components/NotificationBlock/notification'
import EventsBlock from '../components/EventsBlock/events'
import AbsentWorkerBlock from '../components/AbsentWorkerBlock/index'

const mainPage = () => {
  return (
    <PageTemplate>
      <section className={styles.block}>
        <section className={styles.blockAbsent}><AbsentWorkerBlock /></section>
        <section><RequestBlock /></section>
        <section><CalendarBlock /></section>
        <section><BaseBlock /></section>
        <section className={styles.blockEvents}><EventsBlock /></section>
        <aside><NotificationBlock /></aside>
      </section>
    </PageTemplate>
  )
}

export default mainPage