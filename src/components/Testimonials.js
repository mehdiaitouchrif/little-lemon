import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Sanchez",
      image: "maria.jpg",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 2,
      name: "Antony Clifton",
      image: "antony.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 3,
      name: "Tamika Jackson",
      image: "tamika.jpg",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
    {
      id: 4,
      name: "Brandon Ming",
      image: "brandon.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
    },
  ];
  return (
    <div className="testimonials">
      <div className="container">
        <h2>What people say about us!</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;