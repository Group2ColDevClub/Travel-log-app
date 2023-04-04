import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='culomn'>
          <h3>Company</h3>
          <nav>
            <a href='.'>About us</a>
            <br />
            <a href='.'>Why choose us</a>
            <br />
            <a href='.'>Pricing</a>
            <br />
            <a href='.'>Testimonial</a>
          </nav>
        </div>
        <div className='culomn'>
          <h3>Resources</h3>
          <nav>
            <a href='.'>Privacy policy</a>
            <br />
            <a href='.'>Terms & Conditions</a>
            <br />
            <a href='.'>Blog</a>
            <br />
            <a href='.'>Contact us</a>
          </nav>
        </div>
        <div className='culomn'>
          <h3>Product</h3>
          <nav>
            <a href='.'>Project manager</a>
            <br />
            <a href='.'>Time tracker</a>
            <br />
            <a href='.'>Time Schedule</a>
            <br />
            <a href='.'>Lead generate</a>
            <br />
            <a href='.'>Remote Collaboration </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
