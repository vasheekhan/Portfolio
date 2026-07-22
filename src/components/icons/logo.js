import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Vashee Khan Logo</title>

    <g transform="translate(3,3)">
      {/* Hexagon */}
      <polygon
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="39 0 0 22 0 67 39 90 78 68 78 23"
      />

      {/* Letter V */}
      <path
        d="M24 26 L39 64 L54 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default IconLogo;