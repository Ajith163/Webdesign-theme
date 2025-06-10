import React from "react";
const testimonials = [
  {
    name: "Douglas Lyphe",
    title: "Marketing",
    quote:
      "Suspendisse volutpat neque mauris, neque imperdiet dignissim. Sed ut interdum mi.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
  },
  {
    name: "Fig Nelson",
    title: "Sales",
    quote:
      "Curabitur a urna vitae nisl fringilla porta non eu dui. In ullamcorper nisi.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 4,
  },
  {
    name: "John Doe",
    title: "Developer",
    quote:
      "Neque imperdiet dignissim. Sed ut interdum mi, in ullamcorper nisi. Wonderful app!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    name: "Alice Smith",
    title: "Designer",
    quote:
      "Curabitur a urna vitae nisl fringilla porta non eu dui. Great interface and usability.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    stars: 5,
  },
];

const WorkflowTestimonials = ({ theme = "light" }) => {
  return (
    <div>
    

      <div className="subtitle text-danger">TESTIMONIALS</div>
      <h2 className="workflow-title bg">What Our Users Say</h2>
      <div className="workflow-container">
        {testimonials.map((user, index) => (
          <div className="card-3d glass-effect shadow-lg" key={index}>
  <div className="card-inner">
    <div className="card-front">
      <img
        src={user.image}
        alt={user.name}
        className="testimonial-img rounded-circle"
      />
      <h4 className="testimonial-name"style={{color:'darkblue'}}><i><b>{user.name}</b></i></h4>
      <p className="testimonial-title text-dark"><i>{user.title}</i></p>
     <div
  className="testimonial-stars"
  style={{
    color: theme === "black" || theme === "dark" ? "#66aaff" : "#0d3b66",
    fontStyle: "italic",
  }}
>
  <i>
    {"★".repeat(user.stars)}
    {"☆".repeat(5 - user.stars)}
  </i>
</div>

      <div className="step-number">{index + 1}</div>
    </div>
    <div className="card-back">
      <p className="quote-text"><i>"{user.quote}"</i></p>
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default WorkflowTestimonials;
