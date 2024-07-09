import * as styles from './Card.module.css'
import React from 'react';
import BlackStar from "../../assets/BlackStar.png";
function Card({imgURL, title, description, calendarID, linkss}) {
  const product = {
    rating: 4.5,
    noOfReviews: 100,
  };
  return (
    <a href ={linkss+calendarID}>
      <div className={styles.card}>
        <img src={imgURL}/>
        <h2>{title}</h2>
        <h3>
              {product.rating} <img src={BlackStar} alt="Star" /> 
              <span className={styles.blue}> ({product.noOfReviews} reviews)</span>
        </h3>
        <span className={styles.subtitle}>{description}</span>
      </div>
      </a>
  )
}

// default prop types
Card.defaultProps = {
  imgURL: "https://www.mediacollege.com/internet/html/images/image-tag1.gif",
  title: "Title",
  description: "Description",
  calendarID: " ",
  linkss: "http://localhost:3000/calendars/"
}

export default Card;
