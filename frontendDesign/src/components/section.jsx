import React, { useState } from 'react';
import faqImage from '../assets/web.jpg';
import overlayImage from '../assets/icon.avif'; 

const faqs = [
  {
    question: "Cras turpis felis, elementum sed mi at arcu?",
    answer: "Vestibulum nibh risus, lobortis in neque eleifend, varius vulputate sem. Donec maximus, sapien id auctor ornare...",
  },
  {
    question: "Vestibulum nibh risus, in neque eleifendulputate",
    answer: "This is the answer for the second question.",
  },
  {
    question: "Donec maximus, sapien id auctor ornare?",
    answer: "Answer content for the third FAQ goes here.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="container-fluid py-5"
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 d-none d-md-block text-center mb-4 mb-lg-0 position-relative">
            <img
              src={overlayImage}
              alt="Overlay"
              style={{
                position: 'absolute',
                top: '-30px',
                left: '10px',
                width: '300px',
                height: 'auto',
                zIndex: 2,
              }}
            />

            <img
              src={faqImage}
              alt="FAQ Illustration"
              className="img-fluid"
              style={{ maxWidth: '80%', position: 'relative', zIndex: 1 }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <p className="text-uppercase small fw-semibold text-danger">FAQ</p>
            <h2 className="fw-bold mb-4 bg">
              We Have All <br />
              <span style={{ color: '#cce6ff' }}>Answers For You</span>
            </h2>

            {/* FAQ Accordion */}
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item mb-2" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'} fw-semibold`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
