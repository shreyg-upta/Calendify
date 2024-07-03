import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import IPLlogo from "../../assets/IPL_log.jpeg";
import react from "../../assets/react.svg";
import BlackStar from "../../assets/BlackStar.png";
import styles from "./DownloadCalendarPage.module.css";
import axios from "axios";
import RatingSystem from "../../Cells/Ratings/RatingSystem";

function DownloadCalendarPage() {
  let { c } = useParams();
  // const [product, setProduct] = useState(null);
  const [product, setProduct] = useState({
    name: "Indian Premier League",
    description:
      "cricket tournament.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui turpis, pretium sit amet lacus vitae, mattis tempus nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean blandit, erat nec scelerisque condimentum, erat sem condimentum elit, sed vestibulum enim mauris eu metus. Suspendisse eu mauris et sem viverra ultrices. Donec semper malesuada luctus. Sed ut laoreet felis, eget tincidunt eros. Vestibulum id arcu maximus odio tincidunt lacinia. Suspendisse ante enim, varius ut nibh sit amet, porta mollis nisl. Mauris non mollis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut ornare erat. Sed consequat enim nec quam efficitur lobortis sit amet molestie nisl. Nunc eget elementum diam. In at odio posuere, dignissim nulla eget, dictum enim. Sed non vulputate massa. Vivamus molestie aliquet nibh, sodales imperdiet diam efficitur sit amet. Nullam id aliquet sem, sed blandit mi. Quisque nec pharetra massa. Sed elit turpis, rhoncus ut nibh quis, suscipit pulvinar tortor. Praesent ut erat lectus. Aliquam at pharetra diam, vel malesuada velit. Pellentesque vitae sem nisl. Quisque sit amet sollicitudin tellus, vitae mollis metus. Fusce cursus, quam in aliquet volutpat, odio ex dignissim massa, non iaculis ex mauris eget est. Fusce ultricies ex at lacus auctor facilisis. Duis ac ligula vel ipsum facilisis consequat. Cras ultrices ultricies ex id dapibus. Fusce vel varius enim. Duis pharetra tempor sagittis. Donec vestibulum, eros quis aliquet pellentesque, quam neque elementum augue, in ornare sapien enim et metus. Phasellus egestas libero sit amet dolor imperdiet, sit amet gravida massa commodo. Nulla facilisi. Donec ornare hendrerit metus sed pellentesque. Suspendisse euismod velit dui, id fringilla lorem iaculis eget. Aenean ac consequat dui. Aliquam ut laoreet arcu. Phasellus placerat in justo a iaculis. Morbi bibendum a lectus nec imperdiet. Pellentesque tempus pellentesque ipsum, eu rhoncus eros. Nunc at urna quam. Quisque vitae ipsum nisi. Etiam vitae aliquet erat. Donec vestibulum eu metus eget interdum. Cras nec gravida justo. Mauris quis libero auctor, sodales nunc quis, dapibus est. Integer dapibus enim at finibus consectetur. Praesent a dui velit. Nunc porttitor urna quis nulla semper, eget viverra tellus aliquam. Suspendisse ac ante dolor. In scelerisque turpis sed lectus vestibulum, ac aliquam tortor suscipit. Nunc turpis risus, rutrum et maximus ac, congue nec magna. Quisque aliquet vitae sem in tristique.",
    image: react,
    rating: 4.5,
    downloads: 100,
    noOfReviews: 2,
    authorName: "BCCI",
    category: "Sports",
    totalEvents: 60,
    events: [
      {
        title: "Event 1",
        description: "Event Description",
      },
      {
        title: "Event 2",
        description: "Event Description",
      },
      {
        title: "Event 3",
        description: "Event Description",
      },
      {
        title: "Event 4",
        description: "Event Description",
      },
      {
        title: "Event 5",
        description: "Event Description",
      },
    ],

  });
  const [isExpanded, setIsExpanded] = useState(false);
  const apiUrl = `https://testapi.com/product?=${c}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (!product) {
    return (
      <div className={styles.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    const wordLimit = 125;
    const words = product.description.split(" ");
    if (words.length <= wordLimit) {
      return <p>{product.description}</p>;
    }

    if (isExpanded) {
      return (
        <div className={styles.seemore}>
          <p>{product.description}</p>
          <span onClick={toggleDescription}>See less</span>
        </div>
      );
    } else {
      const truncatedDescription = words.slice(0, wordLimit).join(" ") + "...";
      return (
        <div className={styles.seemore}>
          <p>{truncatedDescription}</p>
          <span onClick={toggleDescription}>See more</span>
        </div>
      );
    }
  };
  const renderEvents = () => {
    if (product.events.length === 0) {
      return <p>No events available.</p>;
    }

    const eventsToShow = product.events.slice(0, 3); // Show up to 3 events initially

    return (
      <div className={styles.eventList}>
        {eventsToShow.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
        {product.events.length > 3 && (
          <span href={"/calendars/"+c}>See more</span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.mainerMain}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <img src={product.image} alt={product.name} />
            <div className={styles.titleText}>
              <h1>{product.name}</h1>
              <h3>{product.authorName}</h3>
            </div>
          </div>
          <div className={styles.upperfeat}>
            <h3 className={styles.category}>{product.category}</h3>
            <h3>
              {product.rating} <img src={BlackStar} alt="Star" /> (
              <span className={styles.blue}>{product.noOfReviews} reviews</span>)
            </h3>
          </div>
          <div className={styles.lowerfeat}>
            <h3>{product.totalEvents} Events</h3>
            <h3>{product.downloads} Downloads</h3>
          </div>
        </div>
        <button className={styles.downloadButton}>Add to Google</button>
      </div>
      <div className={styles.Events}>
<img src={IPLlogo} alt="IPL" /><div className={styles.eventList}>
  <h2>Events</h2>
  {renderEvents()}
</div>
     </div>
      <div className={styles.description}>
        <h2>About {product.name}</h2>
        {renderDescription()}
      </div>
      <div className={styles.Reviews}>
        <h2>Reviews</h2>
        <RatingSystem
        initRating={1}
        onRatingChanged={(newRating) => {
          console.log(
            `NEW RATING (${newRating}) DETECTED FOR 2.. SAVING TO DB`
          );
        }}
      />
            </div>
    </div>
  );
}

export default DownloadCalendarPage;
