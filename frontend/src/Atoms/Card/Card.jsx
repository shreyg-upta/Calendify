import * as styles from './Card.module.css'
import React from 'react';
import BlackStar from "../../assets/BlackStar.png";
function Card({imgURL, title, description, calendarID, linkss}) {
  const product = {
    rating: 0,
    noOfReviews: 0,
  };
  if(!linkss){
    return(
    <div className={styles.card}>
    <img src={imgURL}/>
    <h2>{title}</h2>
    <h3>
          {product.rating} <img src={BlackStar} alt="Star" /> 
          <span className={styles.blue}> ({product.noOfReviews} reviews)</span>
    </h3>
    <span className={styles.subtitle}>{description}</span>
  </div>
    )
  }
  return (
    <a href ={"http://localhost:3000/calendars/"+calendarID}>
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
  linkss: true,
}

export default Card;
