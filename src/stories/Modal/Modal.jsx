import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({
  isOpen,
  title,
  content,
  onClose,
  primaryButtonLabel,
  onPrimaryButtonClick,
  secondaryButtonLabel,
  onSecondaryButtonClick,
  primaryButtonColor,
  secondaryButtonColor,
  modalBackgroundColor,
  buttonRadius,
  hideSecondaryButton,
  titleColor,
  contentColor,
  modalRadius,
  centercontent,
  centertitle,
  borderGeneral,
  borderColor,
  borderFirstButtonColor,
  borderSecondButtonColor,
  titleBackground,
  ButtonTextFirstButtonColor,
  ButtonTextSecondButtonColor,
  buttonSpacing,
  SizeContent,
  WeightContent,
  enableButtonHovers,
  buttonTransitionDuration,
  primaryButtonHoverColor,
  secondaryButtonHoverColor,
}) => {
  if (!isOpen) return null;

  const modalStyle = {
    backgroundColor: modalBackgroundColor,
    borderRadius: `${modalRadius}px`,
    border: `${borderGeneral}px solid ${borderColor}`,
  };

  const [primaryButtonHover, setPrimaryButtonHover] = useState(false);
  const [secondaryButtonHover, setSecondaryButtonHover] = useState(false);

  const primaryButtonStyle = {
    backgroundColor: primaryButtonColor,
    borderRadius: `${buttonRadius}px`,
    border: `1px solid ${borderFirstButtonColor}`,
    color: ButtonTextFirstButtonColor,
    transition: `background-color ${buttonTransitionDuration}s, color ${buttonTransitionDuration}s`,
  };

  const secondaryButtonStyle = {
    backgroundColor: secondaryButtonColor,
    borderRadius: `${buttonRadius}px`,
    border: `${borderGeneral}px solid ${borderSecondButtonColor}`,
    color: ButtonTextSecondButtonColor,
    transition: `background-color ${buttonTransitionDuration}s, color ${buttonTransitionDuration}s`,
  };

  const primaryButtonHoverStyle = {
    ...primaryButtonStyle,
    backgroundColor: primaryButtonHover ? primaryButtonHoverColor : primaryButtonColor,
    color: primaryButtonHover ? ButtonTextFirstButtonColor : ButtonTextFirstButtonColor,
  };

  const secondaryButtonHoverStyle = {
    ...secondaryButtonStyle,
    backgroundColor: secondaryButtonHover ? secondaryButtonHoverColor : secondaryButtonColor,
    color: secondaryButtonHover ? ButtonTextSecondButtonColor : ButtonTextSecondButtonColor,
  };

  const titleContainerStyle = {
    background: titleBackground,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    borderRadius: `${modalRadius}px ${modalRadius}px 0 0`,
    border: `${borderColor}`,
  };

  const titleStyle = {
    color: titleColor,
    textAlign: centertitle ? 'center' : 'left',
  };

  const contentStyle = {
    color: contentColor,
    textAlign: centercontent ? 'center' : 'left',
    fontSize: SizeContent,
    fontWeight: WeightContent ? 'bold' : 'normal',
  };

  const modalFooterStyle = {
    display: 'flex',
    justifyContent: hideSecondaryButton ? 'center' : 'space-between',
    margin: `0 ${buttonSpacing}px`,
  };

  const modalContentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  };

  return (
    <div className="modal-overlay">
      <div className="modal" style={modalStyle}>
        <div className="modal-header" style={titleContainerStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content" style={contentStyle}>
          <div style={modalContentWrapperStyle}>
            <p>{content}</p>
          </div>
        </div>
        <div className="modal-footer" style={modalFooterStyle}>
          {!hideSecondaryButton && secondaryButtonLabel && (
            <button
              className="secondary-button"
              style={enableButtonHovers ? secondaryButtonHoverStyle : secondaryButtonStyle}
              onClick={onSecondaryButtonClick}
              onMouseEnter={() => setSecondaryButtonHover(true)}
              onMouseLeave={() => setSecondaryButtonHover(false)}
            >
              {secondaryButtonLabel}
            </button>
          )}
          {primaryButtonLabel && (
            <button
              className="primary-button"
              style={enableButtonHovers ? primaryButtonHoverStyle : primaryButtonStyle}
              onClick={onPrimaryButtonClick}
              onMouseEnter={() => setPrimaryButtonHover(true)}
              onMouseLeave={() => setPrimaryButtonHover(false)}
            >
              {primaryButtonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  primaryButtonLabel: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  secondaryButtonLabel: PropTypes.string,
  onSecondaryButtonClick: PropTypes.func,
  primaryButtonColor: PropTypes.string,
  secondaryButtonColor: PropTypes.string,
  modalBackgroundColor: PropTypes.string,
  buttonRadius: PropTypes.number,
  hideSecondaryButton: PropTypes.bool,
  titleColor: PropTypes.string,
  contentColor: PropTypes.string,
  modalRadius: PropTypes.number,
  centercontent: PropTypes.bool,
  centertitle: PropTypes.bool,
  borderGeneral: PropTypes.number,
  borderColor: PropTypes.string,
  titleBackground: PropTypes.string,
  borderFirstButtonColor: PropTypes.string,
  borderSecondButtonColor: PropTypes.string,
  ButtonTextFirstButtonColor: PropTypes.string,
  ButtonTextSecondButtonColor: PropTypes.string,
  buttonSpacing: PropTypes.number,
  SizeContent: PropTypes.number,
  WeightContent: PropTypes.bool,
  enableButtonHovers: PropTypes.bool,
  primaryButtonHoverColor: PropTypes.string,
  secondaryButtonHoverColor: PropTypes.string,
  buttonTransitionDuration: PropTypes.number,
};

Modal.defaultProps = {
  primaryButtonColor: '#007bff',
  secondaryButtonColor: '#f0f0f0',
  modalBackgroundColor: '#ffffff',
  buttonRadius: 8,
  hideSecondaryButton: false,
  titleColor: '#000000',
  contentColor: '#000000',
  modalRadius: 8,
  centercontent: false,
  centertitle: false,
  borderGeneral: 0,
  borderColor: '#000000',
  titleBackground: '#ffffff',
  borderFirstButtonColor: '#000000',
  borderSecondButtonColor: '#000000',
  ButtonTextFirstButtonColor: '#ffffff',
  ButtonTextSecondButtonColor: '#000000',
  buttonSpacing: 10,
  SizeContent: 16,
  WeightContent: 400,
  enableButtonHovers: true,
  primaryButtonHoverColor: '#ffffff',
  secondaryButtonHoverColor: '#ffffff',
  buttonTransitionDuration: 0.3,
};

export default Modal;
