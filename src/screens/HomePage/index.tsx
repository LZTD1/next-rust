import React from 'react';

import styles from './HomePage.module.scss';
import logo from '../../assets/logo.jpg';

function index() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.siteLogo}>
            <img src={logo.src} />
          </div>
          {/* TODO Для возвращения на главную */}
          <div className={styles.siteMenu}>
            <button>Главная</button>
            <button>Товары</button>
            <button>Серверы</button>
            <button>Информация</button>
          </div>
          {/* TODO Для выбора подпункта меню*/}
          <div className={styles.myAccount}></div>{' '}
          {/* TODO Для входа в свой аккаунт (дефолт ава чел с шлемом)*/}
        </div>
        <div className={styles.wrapper}>{/* TODO some content... */}</div>
      </div>
    </div>
  );
}

export default index;
