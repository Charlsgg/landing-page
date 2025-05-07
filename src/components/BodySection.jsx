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

      {/* New Section */}
      <div className="how-it-works">
        <h2 className="hiw-heading">How It Works</h2>
        <p className="hiw-subheading">It’s convenient to use at every step.</p>
        <div className="video-preview">VIDEO PREVIEW</div>
        <div className="steps">
          <div className="step">Upload Content</div>
          <span className="arrow">→</span>
          <div className="step">Modify Output</div>
          <span className="arrow">→</span>
          <div className="step">Download Files</div>
        </div>
      </div>
      <div className="pricing-section">
  <h2 className="hiw-heading">Pricing Details</h2>
  <p className="hiw-subheading">
    You can use OmniDoc for free, or you could unlock everything in Premium.
  </p>

  <div className="pricing-boxes">
    {/* FREE Box */}
    <div className="pricing-box free">
      <h3>FREE</h3>
      <ul>
        <li>• Limited upload size</li>
        <li>• Limited modification options</li>
        <li>• Output only includes quizzes</li>
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <button className="pricing-btn">No Cost</button>
      </div>
    </div>

    {/* PREMIUM Box */}
    <div className="pricing-box premium">
      <h3 className="premium-label">PREMIUM</h3>
      <ul>
        <li>• Unlimited upload size</li>
        <li>• Unlimited modification options</li>
        <li>• Output includes quizzes, slides, presentation scripts, and flashcards</li>
        <li>• Collaboration features</li>
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <button className="pricing-btn premium-btn">₱ 250 / mo</button>
      </div>
    </div>
  </div>

  {/* CTA Button */}
  <button className="get-started-btn">Get Started</button>
</div>
      {/* Who We Are Section */}
      <div className="who-we-are">
        <h2 className="who-heading">Who We Are</h2>
        <p className="who-subheading">We are from Caraga State University.</p>
        <div className="who-circles">
          <div className="who-person">
            <div className="who-avatar" />
            <p className="who-name">Klinth Jerald<br /><strong>MATUGAS</strong></p>
          </div>
          <div className="who-person">
            <div className="who-avatar" />
            <p className="who-name">Charls Mcklein <br /><strong>GULLE</strong></p>
          </div>
          <div className="who-person">
            <div className="who-avatar" />
            <p className="who-name">Claud<br /><strong>GERONA</strong></p>
          </div>
          <div className="who-person">
            <div className="who-avatar" />
            <p className="who-name">Rubilee<br /><strong>GANOY</strong></p>
          </div>
        </div>
      </div>


    </section>
    
  );
}

export default BodySection;
