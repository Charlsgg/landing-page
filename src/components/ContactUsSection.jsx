import './css/ContactUsSection.css';
import instagram from './icons/instagram.png';
import facebook from './icons/facebook.png';
import twitter from './icons/twitter.png';
export default function ContactUsSection() {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Subscribe to our newsletter for updates and feel free to reach out to us!
        </p>

        <div className="contact-form">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>

        <div className="contact-methods">
          <div className="contact-card">
            <p className="card-title">By Email</p>
            <p>examplecontact@example.com</p>
          </div>
          <div className="contact-card">
            <p className="card-title">By Phone</p>
            <p>(+63) XXX XXX XXXX</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h4>About the Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4>About the Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>FAQs and Support</li>
            </ul>
          </div>
          <div>
            <h4>Legal Information</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms and Conditions</li>
              <li>Policies</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <p>Find us on social media:</p>
          <div className="social-icons">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter/X" /></a>
          </div>
          <p className="copyright">© 2024 Copyright, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
