import React from 'react';
import './css/BodySection.css';

function BodySection() {
  return (
    <section className="body2">
      <div className="container2">

        <div className="text-content">
          <h1 className="heading">
            Work Less,<br />Do More
          </h1>
          <p className="subheading">with the power of A.I. at your fingertips.</p>
          <p className="description">
            Create hassle-free educational content in the way that you like with hardly any effort at all.
          </p>
          <button className="learn-button">Learn More</button>
        </div>

        <div className="image-preview">
          IMAGE PREVIEW
        </div>
      </div>
    </section>
  );
}

export default BodySection;
