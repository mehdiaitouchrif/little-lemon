import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <div className="meal-img">
        <img src={meal.image} alt="" />
      </div>
      <div className="meal-details">
        <div className="meal-details-header">
          <h3>{meal.title}</h3>
          <p>${meal.price}</p>
        </div>
        <div className="meal-details-description">{meal.description}</div>
        <div className="meal-details-footer">
          <a href="/order">Order a delivery</a>
          <FontAwesomeIcon icon={faBicycle} />
        </div>
      </div>
    </div>
  );
};

export default MealCard;