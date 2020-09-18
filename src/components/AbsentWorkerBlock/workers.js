import React from 'react'
import styles from './styles.module.scss'
import Worker from './worker'
import Avatar1 from '../../assets/icons/26.svg'
import Avatar2 from '../../assets/icons/1.svg'
import Avatar3 from '../../assets/icons/14.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChevronIcon from '../../assets/icons/chevron2.svg'

const WorkerItems = ({avatar, name, position, absentDate}) => {
  return (
    <div className={styles.blockWorkers}>
      <img src={ChevronIcon} alt='#' className={styles.chevronLeft}/>

      {/* Список всех рабочих с указанием имени, должности, причины пропуска и даты  */}
      <div className={styles.blockWorkersContent}>
        <Route path='/absent' exact>
          <Worker 
          name='Никифорова Валентина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
        />
          <Worker 
          name='Федотов Алексей'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
        />
          <Worker 
          name='Гончаров Леонид'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
          reason='В отпуске'
        />
          <Worker 
          name='Сапогова Лилия'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar3}
          reason='В отпуске'
        />
          <Worker 
          name='Кузнецова Екатерина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
        />
          <Worker 
          name='Зырянов Кирилл'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar2}
          reason='В отпуске'
        />
          <Worker 
          name='Шепелева Галина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar3}
          reason='В отпуске'
        />
          <Worker 
          name='Яковлев Николай'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='Отгул'
        />
          <Worker 
          name='Терентьев Валерий'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar2}
          reason='Отгул'
        />
        </Route>

        <Route path='/absent/vacation' exact>
          <Worker
          name='Никифорова Валентина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
        />
          <Worker 
          name='Никифорова Валентина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='В отпуске'
        />
        </Route>

        <Route path='/absent/dayoff' exact>
          <Worker 
          name='Мырзабеков Амангельди'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar3}
          reason='Отгул'
        />
        </Route>
        <Route path='/absent/sick' exact>
          <Worker 
          name='Никифорова Валентина'
          position='Менеджер по продажам'
          absentDate='10 августа 2020 - 21 августа 2020'
          avatar={Avatar1}
          reason='Больничный'
        />
        </Route>
      </div>
      <img src={ChevronIcon} alt='#' className={styles.chevronRight}/>
    </div>
  )
}

export default WorkerItems