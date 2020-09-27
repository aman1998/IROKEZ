import React from 'react';
import BlockTemplate from '../BlockTemplate/blockTemplate'
import styles from './styles.module.scss'
import BookImg from '../../assets/icons/book.svg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const RequestBlock = () => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   };

  return (
    <BlockTemplate title={'База знаний'} count='2'>
      <div className={styles.blockContent}>
        <div className={styles.base}>
          <img src={BookImg} alt='#'/>
          <div>Новых публикаций нет</div>
        </div>
      </div>
    </BlockTemplate>
  )
}

export default RequestBlock

        {/* <div style={{width: '500px'}}>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Slider>
        </div> */}