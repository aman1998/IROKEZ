import React from 'react'
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'
import avatar from '../../assets/icons/26.svg'
import smile from '../../assets/icons/smile.svg'
import arrow from '../../assets/icons/arrow.svg'
import photo from '../../assets/icons/Updates.png'
import salute from '../../assets/icons/Emote.svg'
import comment from '../../assets/icons/message.svg'

const EventsBlock = () => {
  return (
    <BlockTemplate title={'Водопад событии'} count='1'>
      <div className={styles.block}>

      {/* Блок с новостями */}
        <div className={styles.news}>
          <div className={`${styles.newsTime} ${styles.today}`}>Новое</div>
          <img src={avatar} alt='#'/>
          <div className={styles.newsContent}>
            <div className={styles.newsSender}>Company Sample Name <span>Сегодня, 10:50</span></div>
            <div className={styles.newsText}>Текст объявления, который написан от лица компании.</div>
          </div>
        </div>

        <div className={`${styles.news} ${styles.newsYesterday}`}>
          <div className={`${styles.newsTime} ${styles.yesterday}`}>Вчера</div>
          <img src={avatar} alt='#'/>
          <div className={styles.newsContent}>
            <div className={styles.newsSender}>Калинина Оксана <span>Сегодня, 9:20</span></div>
            <div className={styles.newsText}>Текст объявления, который написан от лица компании.</div>
          </div>

      {/* Маленький блок для смайкликов */}
          <img src={arrow} className={styles.arrow} alt='#'/>
          <div className={styles.smiles}>
            <div><img src={smile} alt='#' className={styles.smile}/></div>
            <div className={styles.points}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

        </div>

        {/* Блок статей */}
        <div className={styles.posts}>
          <img src={photo} alt='#' className={styles.postsPhoto}/>
          <div>30 апреля 2020, 12:00</div>
          <div className={styles.postsText}>Здесь будет находится длинный очень длинный заголовокопубликованной новости в водопаде событий</div>
          <div>Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых... </div>

          {/* Блок взаимодействия со смайликами */}
          <div>
            <div className={styles.postSmiley}>
              <img src={salute} alt='#'/> 
              <span>3</span>
            </div>
            <div className={`${styles.postSmiley} ${styles.postSmileyRed}`}>
              <img src={salute} alt='#'/> 
              <span>3</span>
            </div>
            <div className={`${styles.postSmiley} ${styles.postSmileySmile}`}>
              <img src={smile} alt='#'/> 
            </div>
            <div className={`${styles.postSmiley} ${styles.postSmileyComment}`}>
              <img src={comment} alt='#'/> 
              <div>18 комментариев</div>
            </div>
          </div>
        </div>
      </div>
    </BlockTemplate>
  )
}

export default EventsBlock
