import React from 'react';
import waterfallImage from './waterfall.jpg';
import './WebsiteBackgroundStyles.css';

export const WebsiteBackground = () => {
  return (
    <img className="waterfallImage" src={waterfallImage} alt="waterfall" />
  )
}
