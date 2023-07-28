import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

const Tabs = ({ tabs, defaultTab, onTabChange, align, vertical, showUnderline, underlineColor, spacing, className, divbold, divColor, Titlebold, TitleColor, TitleSize, TitleboldGen, TitlecolorGen  }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  const tabsContainerStyle = {
    justifyContent: align === 'center' ? 'center' : 'flex-start',
    flexDirection: vertical ? 'column' : 'row',
    fontSize: TitleSize,
    fontWeight: TitleboldGen ? 'bold' : 'normal',
    TitleboldGen: TitlecolorGen,

  };

  const underlineStyle = {
    borderBottom: showUnderline && activeTab ? `2px solid ${underlineColor}` : 'none',
    color: TitleColor,
    fontWeight: Titlebold ? 'bold' : 'normal',
};

  const tabContentStyle = {
    padding: vertical ? `0 0 0 ${spacing}` : `0 ${spacing} 0 0`,
    fontWeight: divbold ? 'bold' : 'normal',
    color:  divColor,
  };

  const tabsStyle = {
    borderRight: vertical ? '2px solid #ddd' : 'none',
    paddingRight: vertical ? '8px' : '0',
    borderBottom: vertical ? 'none' : '2px solid #ddd',
  };

  const tabsClass = `tabs ${vertical ? 'vertical' : ''}`;

  return (
    <div className={`tabs-container ${className}`} style={vertical ? { display: 'flex', gap: spacing } : null}>
      {/* Utilisation des styles pour le conteneur .tabs */}
      <div className={tabsClass} style={{ ...tabsContainerStyle, ...tabsStyle }}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.name)}
            style={activeTab === tab.name ? underlineStyle : null}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) =>
          tab.name === activeTab ? (
            <div key={tab.name} style={tabContentStyle}>
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultTab: PropTypes.string,
  onTabChange: PropTypes.func,
  align: PropTypes.oneOf(['left', 'center']),
  vertical: PropTypes.bool,
  showUnderline: PropTypes.bool,
  underlineColor: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
  divbold: PropTypes.bool,
  divColor: PropTypes.string,
    Titlebold: PropTypes.bool,
    TitleColor: PropTypes.string,
    TitleSize: PropTypes.string,
    TitleboldGen: PropTypes.bool,
    TitlecolorGen: PropTypes.string,
};

Tabs.defaultProps = {
  defaultTab: '',
  align: 'left',
  vertical: false,
  showUnderline: true,
  underlineColor: '#000000',
  spacing: '10px',
  className: '',
  divbold: false,
  divColor: '#000000',
    Titlebold: false,
    TitleColor: '#000000',
    TitleSize: '16px',
    TitleboldGen: false,
    TitlecolorGen: '#000000',
};

export default Tabs;
