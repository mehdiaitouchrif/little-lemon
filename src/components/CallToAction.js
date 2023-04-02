import styles from "../styles/CallToAction.module.css";
import Button from "./Button";

const CallToAction = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Action */}
        <div className={styles.heroAction}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className={styles.heroText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              doloremque dignissimos molestiae beatae labore, harum accusantium
              nesciunt officiis non similique.
            </p>
          </div>
          <Button>Reserve a table</Button>
        </div>
        {/* Image */}
        <div className={styles.heroImg}>
          <img src="/restaurant-food.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
