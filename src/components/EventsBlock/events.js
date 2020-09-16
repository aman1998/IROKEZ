import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'

const EventsBlock = () => {
  return (
    <BlockTemplate title={'Водопад событии'} count='1'>
      <div className={styles.block}>

      </div>
    </BlockTemplate>
  )
}

export default EventsBlock
