import React from 'react';
import PropTypes from 'prop-types';
import './gauge.css';

export const Gauge = ({ value, minValue, maxValue, fillColor, borderColor, borderRadius, width, height,backgroundBgColor, ...props }) => {
  // Calculer la largeur de la jauge en pourcentage
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
  const style = {
    width: `${percentage}%`,
    height: `${height}px`,
    backgroundColor: fillColor,
    borderRadius: `${borderRadius}px`,
  };

  const containerStyle = {
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundBgColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <div className="gauge-container" style={{ ...containerStyle, width: `${width}%`, height: `${height}px` }}>
      <div className="gauge" style={style}></div>
    </div>
  );
};

Gauge.propTypes = {
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  fillColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundBgColor: PropTypes.string,
};

Gauge.defaultProps = {
  minValue: 0,
  maxValue: 100,
  fillColor: '#4caf50',
  borderColor: 'black',
  borderRadius: 5,
  width: 8000,
  height: 20,
  backgroundBgColor: '#f0f0f0',
};
