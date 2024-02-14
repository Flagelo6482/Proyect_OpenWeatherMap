/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/Css/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default Spinner