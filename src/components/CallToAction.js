const CallToAction = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Action */}
        <div className="hero-action">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className="hero-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              doloremque dignissimos molestiae beatae labore, harum accusantium
              nesciunt officiis non similique.
            </p>
          </div>
          <button className="btn">Reserve a table</button>
        </div>
        {/* Image */}
        <div className="hero-img">
          <img src="/restaurant-food.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
