import React from 'react';

import './Footer.css';

export default function Footer() {

  return (
    <footer className="bg-primary main_footer">
        <div className="container">
            <p>Created by <a href="http://wedoapps.eu">WeDoApps - React Lessons</a>.</p>
            <p>Tuyn Footer <a href="https://google.com/">Tuyn Link</a>.</p>
            <p>Icons from <a href="https://fontawesome.com/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow">Google</a>.</p>
        </div>
    </footer>
  );
}