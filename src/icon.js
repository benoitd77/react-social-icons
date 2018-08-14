import React, { PropTypes } from 'react';
import { iconFor } from './networks';
import { socialSvgContent } from './styles.js';

function Icon({ networkKey, ...props }) {
  return (
    <g {...props} className="social-svg-icon" style={socialSvgContent} >
      <path d={iconFor(networkKey)} />
    </g>
  );
}

export default Icon;
