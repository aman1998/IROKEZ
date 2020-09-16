import React from 'react'

const Chevron = () => {
  return (
    <svg style={{transform: 'rotate(-90deg)'}} width="24" height="24" viewBox="0 0 24 24" fill="#FF4C00" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 9.5C8.25598 9.5 8.51198 9.598 8.70698 9.793L12.012 13.098L15.305 9.918C15.703 9.534 16.335 9.544 16.719 9.943C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.302 15.598 11.678 15.593 11.293 15.207L7.29298 11.207C6.90198 10.816 6.90198 10.184 7.29298 9.793C7.48798 9.598 7.74398 9.5 7.99998 9.5Z" fill="#FF4C00"/>
      <mask id="mask0"  maskUnits="userSpaceOnUse" x="6" y="9" width="11" height="7">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 9.5C8.25598 9.5 8.51198 9.598 8.70698 9.793L12.012 13.098L15.305 9.918C15.703 9.534 16.335 9.544 16.719 9.943C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.302 15.598 11.678 15.593 11.293 15.207L7.29298 11.207C6.90198 10.816 6.90198 10.184 7.29298 9.793C7.48798 9.598 7.74398 9.5 7.99998 9.5Z" fill="#FF4C00"/>
      </mask>
      <g mask="url(#mask0)">
      {/* <rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)"/> */}
      </g>
    </svg>
  )
}

export default Chevron

