import React from 'react';

const BackSpaceIcon = ({color = '#888', size = 24}) => (
    <svg fill={color} height={size} viewBox={`0 0 ${size} ${size}`} width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z" />
    </svg>
);

export default BackSpaceIcon;
