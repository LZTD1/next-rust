import React from 'react';
import Wave from 'react-wavify';

import logo from '../../assets/logo.jpg';
import styles from '../StartPage/StartPage.module.scss';

function index() : JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.logoAndName}>
        <img src={logo.src} />
        <button>Загрузка сайта...</button>
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
