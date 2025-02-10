import React from 'react';
// import '../APPLE WEB BOOTSTRAP/bootstrap.min.css';
function Footer() {
  return (
    <footer className="pt-5 container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-muted small">
            Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of
            iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone.
            <a href="#"> Full terms apply</a>.
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 col-sm-6">
            <h5>Shop and Learn</h5>
            <ul className="list-unstyled">
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Music</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">Apple Card</a></li>
              <li><a href="#">iCloud</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Apple Store</h5>
            <ul className="list-unstyled">
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Apple Trade In</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>For Business</h5>
            <ul className="list-unstyled">
              <li><a href="#">Apple and Business</a></li>
              <li><a href="#">Shop for Business</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center text-muted small py-3">
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you.
          Or call 1-800-MY-APPLE.
        </div>
        <hr />
        <div className="text-center text-muted small py-3">
          Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
