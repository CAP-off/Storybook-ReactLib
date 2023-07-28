import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, hoverColor, borderRadius, hoverDuration, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const style = {
    backgroundColor,
    borderRadius: `${borderRadius}px`,
    transition: `background-color ${hoverDuration}s ease`, // Ajouter la transition du hover
  };

  const hoverStyle = {
    backgroundColor: hoverColor,
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ ...style }}
      onMouseEnter={(e) => {
        // il faut que le hover fasse une transition de couleur mais qu'il revienne a l'initial mais quand j'enleve la souris
        e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = backgroundColor;
      }}

      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  borderRadius: PropTypes.number,
  hoverDuration: PropTypes.number, // Ajouter la prop pour la durée de transition du hover
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  borderRadius: 0,
  hoverDuration: 0.3, // Valeur par défaut pour la durée de transition du hover
};
