import MealCard from "./MealCard";

const Specials = () => {
  const meals = [
    {
      id: 1,
      title: "Greek salad",
      image: "greek-salad.jpg",
      price: 12.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
    {
      id: 2,
      title: "Bruschetta",
      image: "bruschetta.jpg",
      price: 5.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      image: "lemon-dessert.jpg",
      price: 5.0,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
  ];

  return (
    <div className="specials">
      <div className="container">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="btn">Online Menu</button>
        </div>
        <div className="specials-grid">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
