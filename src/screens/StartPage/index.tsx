import Wave from 'react-wavify';

import logo from '../../assets/logo.jpg';
import styles from './StartPage.module.scss';
import ServerViewBlock from '../ServerViewBlock';

// TODO адаптивная верстка:
//         - Логотипа, резайс под экран (с помощью единой еденицы измерения и calc)
//         - Кнопка, резайс под экран
//         - Волны, резайс под высоту экрана
//         - Регулировать количество точек в волнах на мобилках

function index(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.viewBlock}>
            <div className={styles.logoAndName}>
              <img src={logo.src} />
              <ServerViewBlock />
            </div>
          </div>
          <div className={styles.news}></div>
        </div>
        <div className={styles.swapper}></div>
      </div>
      <div className={styles.waves}>
        <Wave
          fill="#00406b"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 30,
            amplitude: 140,
            speed: 0.05,
            points: 6,
          }}
        />
        <Wave
          fill="#1b5583"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 90,
            amplitude: 90,
            speed: 0.1,
            points: 4,
          }}
        />
      </div>
    </div>
  );
}

export default index;
