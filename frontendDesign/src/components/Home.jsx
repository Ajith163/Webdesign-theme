import React from 'react'
import phoneMockup from '../assets/react.svg'; // adjust the path if needed

export default function Home() {
  return (
    <div>
<div className="container-fluid py-5 px-5 animated-bg position-relative overflow-hidden">
      <div className="row align-items-center flex-column-reverse flex-lg-row">
        
        {/* Left Column */}
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-5 fw-bold mb-3">
            Showcase Your <br />
            <span className="text-warning">Le Union</span> In Easy Way
          </h1>
          <p className="text-muted mb-4">
            Fusce id tortor ac justo ornare eleifend. Etiam vitae mattis dolor, at molestie mauris. Etiam ullamcorper semper arcu, posuere interdum ipsum mollis eget.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
            <button className="btn btn-warning text-white px-4 py-2 fw-semibold">
              DISCOVER LE UNION NOW
            </button>
            <button className="btn btn-outline-warning d-flex align-items-center justify-content-center px-3 py-2">
              ▶
            </button>
          </div>
        </div>

        <div className="col-lg-6 position-relative d-flex justify-content-center mt-5 mt-lg-0">
        
      <img
  src="https://i.imgur.com/xrkeB7l.png"
  className="vert-move"
  style={{ position: 'absolute', left: 250, top: "-12rem", width: 250 }}
/>

<img
  src="https://i.imgur.com/c4p8zI6.png"
  className="vert-move"
  style={{ position: 'absolute', width: 300, top: "-10rem" }}
/>

        </div>
      </div>
    </div>
    </div>
  )
}
