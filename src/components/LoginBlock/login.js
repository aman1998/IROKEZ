import React from 'react'
import styles from './styles.module.scss'
import GenderIcon from '../../assets/icons/gender'
import Cancel from '../../assets/icons/cancel'

const Login = ({getShowLogin}) => {
  const [radio, setRadio] = React.useState(false)
  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        {/* Фото */}
        <div className={styles.formPhoto}></div>

        {/* Блок с именем */}
        <div className={styles.formContent}>
          <div className={styles.formContentItem}>
            <div className={styles.title}>Name</div>
            <label>
              <input placeholder='Luk Skywalker'/>
            </label>
          </div>

          {/* Блок с выбором гендерной принадлежности */}
          <div className={`${styles.blockRadio} ${styles.formContentItem}`}>
              <div className={styles.title}>Gender</div>
              <div className={styles.content}>
                <div className={styles.radio}>
                  <input type='radio' id='male' checked='checked' name='radio' className={styles.input} onChange={() => setRadio(true)}/>
                  <label htmlFor='male'><GenderIcon /></label>
                  <span>Male</span>
                </div>
                <div className={styles.radio}>
                  <input type='radio' id='female' name='radio' onChange={() => setRadio(true)} />
                  <label htmlFor='female'><GenderIcon /></label>
                  <span>Female</span>
                </div>
              </div>
          </div>

          {/* Блок с датой рождения */}
          <div className={styles.formContentItem}>
            <div className={styles.title}>Date of birth</div>
            <label>
              <input placeholder='May 25, 1977' />
            </label>
          </div>

          {/* Блок с почтой */}
          <div className={styles.formContentItem} >
            <div className={styles.title}>Email</div>
            <label>
              <input placeholder='Lukskywalker@galaxy.com' type='email' />
            </label>
          </div>

          {/* Блок с городом */}
          <div className={styles.formContentItem}>
            <div className={styles.title}>City</div>
            <label>
              <input placeholder='City'/>
            </label>
          </div>

          {/* Блок со страной */}
          <div className={styles.formContentItem}>
            <div className={styles.title}>Country</div>
            <label>
              <input placeholder='Country'/>
            </label>
          </div>

          {/* Блок Subscription */}
          <div className={`${styles.formContentItem} ${styles.blockSubs}`}>
            <div className={styles.title}>Subscription</div>
            <div className={styles.content}>
              <div className={styles.contentBronze}>Bronze</div>
              <div className={styles.contentSilver}>Bronze</div>
              <div className={styles.contentGold}>Bronze</div>
            </div>
          </div>

          {/* Блок с кнопками */}
          <div className={`${styles.formContentItem} ${styles.blockBtns}`}>
            <div className={styles.title}></div>
            <div className={styles.content}>
              <div className={styles.contentCancel}>Cancel</div>
              <div className={styles.contentSave}>Save</div>
            </div>
          </div>
        </div>

        {/* Иконка закрытия блока */}
        <div className={styles.cancel} onClick={() => getShowLogin(false)}><Cancel /></div>
      </form>
    </section>
  )
}

export default Login