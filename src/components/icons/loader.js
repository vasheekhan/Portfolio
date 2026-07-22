import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100">
    <title>Loader Logo</title>

    <g>
      {/* Letter V */}
      <g id="V">
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fontSize="42"
          fontWeight="700"
          fontFamily="Inter, Arial, sans-serif"
          fill="currentColor">
          V
        </text>
      </g>

      {/* Hexagon */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M50 5
           L11 27
           L11 72
           L50 95
           L89 73
           L89 28
           Z"
      />
    </g>
  </svg>
);

export default IconLoader;