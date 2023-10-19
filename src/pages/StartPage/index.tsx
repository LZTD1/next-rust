import React from 'react';
import Wave from 'react-wavify';

import logo from '../../assets/logo.jpg';
import styles from '../StartPage/StartPage.module.scss';

function index() {
  return (
    <div className={styles.root}>
      <div className={styles.logoAndName}>
        <img src={logo.src} />
      </div>
      <div className={styles.waves}>
        <Wave
          fill="#00406b"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 500,
            amplitude: 300,
            speed: 0.05,
            points: 4,
          }}
        />
        {/* <Wave
          fill="#1b5583"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 300,
            amplitude: 200,
            speed: 0.1,
            points: 5,
          }}
        /> */}
      </div>
      {/* <div
        className="devBlock"
        style={{
          height: '100px',
        }}
      ></div> */}
    </div>
  );
}

export default index;
