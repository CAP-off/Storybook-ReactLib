import React from 'react';
import PropTypes from 'prop-types';
import './codedisplay.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code, theme }) => {
  let selectedTheme;
  switch (theme) {
    case 'atomDark':
      selectedTheme = atomDark;
      break;
    case 'prism':
      selectedTheme = prism;
      break;
    case 'solarizedlight':
      selectedTheme = solarizedlight;
      break;
    default:
      selectedTheme = atomDark;
      break;
  }

  return (
    <SyntaxHighlighter language="jsx" style={selectedTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['atomDark', 'prism', 'solarizedlight']),
};

CodeDisplay.defaultProps = {
  theme: 'atomDark',
};

export default CodeDisplay;
