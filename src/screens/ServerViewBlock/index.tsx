import React from 'react';

import styles from './ServerViewBlock.module.scss';

function index(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.serverName}>MUSHROOMS</div>
      <div className={styles.fullingBar}>
        <div className={styles.progress}></div>
        <span className={styles.countPeolpe}>72</span>
      </div>
      <span className={styles.connect}>Присоедениться</span>
    </div>
  );
}

export default index;
