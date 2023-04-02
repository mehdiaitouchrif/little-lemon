import Rating from "./Rating";

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <img src={testimonial.image} alt="" />
        <p>{testimonial.name}</p>
      </div>
      <Rating rating={testimonial.rating} />
      <div className="testimonial-text">
        <blockquote>{testimonial.text}</blockquote>{" "}
      </div>
    </div>
  );
};

export default TestimonialItem;
