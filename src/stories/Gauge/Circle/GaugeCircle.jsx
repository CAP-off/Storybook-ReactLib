import React from 'react';
import PropTypes from 'prop-types';
import './gauge-circle.css';

export const GaugeCircle = ({ value, minValue, maxValue, fillColor, centerColor, size, ...props }) => {
  // Calculer l'angle en degrés de la jauge circulaire
  const degrees = ((value - minValue) / (maxValue - minValue)) * 360;
  const rotateStyle = {
    transform: `rotate(${degrees}deg)`,
  };

  const centerStyle = {
    backgroundColor: centerColor,
  };

  return (
    <div className="gauge-circle-container" style={{ width: size, height: size }}>
      <div className="gauge-circle" style={rotateStyle}>
        <div className="gauge-circle-center" style={centerStyle}></div>
      </div>
    </div>
  );
};

GaugeCircle.propTypes = {
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  fillColor: PropTypes.string,
  centerColor: PropTypes.string, // Couleur ou image au centre de la jauge
  size: PropTypes.number, // Taille de la jauge circulaire en pixels
};

GaugeCircle.defaultProps = {
  minValue: 0,
  maxValue: 100,
  fillColor: '#4caf50',
  centerColor: '#f0f0f0', // Couleur grise par défaut au centre
  size: 200, // Taille par défaut de la jauge circulaire (200 pixels)
};
