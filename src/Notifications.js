// src/Notifications.js
import React from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        className="close-button"
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
