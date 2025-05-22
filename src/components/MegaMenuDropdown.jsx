import React from 'react';
import './MegaMenu.css'; // custom CSS

const MegaMenuDropdown = () => {
  return (
    <div className="mega-menu">
      <div className="container d-flex justify-content-between">
        <div>
          <h6>Solutions</h6>
          <ul>
            <li>Cloud</li>
            <li>AI & ML</li>
            <li>Data Analytics</li>
            <li>Cyber Security</li>
          </ul>
        </div>
        <div>
          <h6>Industries</h6>
          <ul>
            <li>Banking</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Automotive</li>
          </ul>
        </div>
        <div>
          <h6>Resources</h6>
          <ul>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Webinars</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown;
