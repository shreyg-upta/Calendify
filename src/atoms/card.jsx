import * as styles from './card.module.css'
import React from 'react';

function Card({imgURL, title, description, linkss}) {
  return (
    <a href ={linkss}>
      <div className={styles.card}>
        <img src={imgURL}/>
        <h2>{title}</h2>
        <span className={styles.subtitle}>{description}</span>
      </div>
      </a>
  )
}

export default Card;
