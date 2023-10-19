import React from 'react';

import styles from './HomePage.module.scss';

function index() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.siteLogo}></div> {/*Для возвращения на главную */}
          <div className={styles.siteMenu}></div> {/*Для выбора подпункта меню*/}
          <div className={styles.myAccount}></div>{' '}
          {/*Для входа в свой аккаунт (дефолт ава чел с шлемом)*/}
        </div>
        <div className={styles.wrapper}>
            {/* some content... */}
        </div>
      </div>
    </div>
  );
}

export default index;
