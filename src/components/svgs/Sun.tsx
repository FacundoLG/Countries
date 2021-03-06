import { FC } from "react";
interface SunInterface {
  size?: number
  onClick?: () => any
}
const Sun:FC<SunInterface> = ({size,onClick}) => {
  return (
    <svg
    data-testid="sun"
      onClick={onClick}
      width={(size || 24) + 1}
      height={size || 24}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0741 2.18071C24.0741 2.18071 15.7015 6.81202 18.3381 9.15286C19.2178 9.9338 21.1284 10.2873 21.1284 10.2873C20.2651 7.7353 24.0741 2.18071 24.0741 2.18071Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30.5946 8.83138C30.5946 8.83138 21.0421 8.28582 22.0247 11.6719C22.3525 12.8016 23.7805 14.1193 23.7805 14.1193C24.4107 11.5 30.5946 8.83138 30.5946 8.83138Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33.0192 16.5451C33.0192 16.5451 24.5702 12.0547 24.0468 15.5415C23.8722 16.7047 24.6182 18.4988 24.6182 18.4988C26.2861 16.3831 33.0192 16.5451 33.0192 16.5451Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M29.0888 26.5232C29.0888 26.5232 25.7054 17.5733 23.0108 19.8472C22.1118 20.6058 21.4882 22.446 21.4882 22.446C24.1375 21.9574 29.0888 26.5232 29.0888 26.5232Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20.8008 32.4151C20.8008 32.4151 23.6864 23.2925 20.1625 23.4093C18.9869 23.4482 17.3576 24.507 17.3576 24.507C19.7404 25.7639 20.8008 32.4151 20.8008 32.4151Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.94508 31.2343C9.94508 31.2343 18.3176 26.603 15.681 24.2622C14.8014 23.4812 12.8908 23.1278 12.8908 23.1278C13.7541 25.6797 9.94508 31.2343 9.94508 31.2343Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3.42468 24.5837C3.42468 24.5837 12.9772 25.1293 11.9946 21.7431C11.6667 20.6135 10.2388 19.2958 10.2388 19.2958C9.60857 21.9151 3.42468 24.5837 3.42468 24.5837Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M1.00006 16.87C1.00006 16.87 9.44905 21.3603 9.97249 17.8736C10.1471 16.7104 9.40105 14.9163 9.40105 14.9163C7.73323 17.032 1.00006 16.87 1.00006 16.87Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4.93048 6.89178C4.93048 6.89178 8.31391 15.8417 11.0085 13.5678C11.9075 12.8092 12.5311 10.969 12.5311 10.969C9.88176 11.4576 4.93048 6.89178 4.93048 6.89178Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.2184 0.999961C13.2184 0.999961 10.3328 10.1226 13.8567 10.0058C15.0323 9.96679 16.6616 8.90807 16.6616 8.90807C14.2787 7.6511 13.2184 0.999961 13.2184 0.999961Z"
        fill="#FF9110"
        stroke="#FF9110"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="17.0096"
        cy="17.0096"
        r="9.78365"
        fill="url(#paint0_radial_1_145)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_145"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.0096 17.0096) rotate(90) scale(9.78365)"
        >
          <stop offset="0.776042" stopColor="#FF7410" />
          <stop offset="1" stopColor="#FF7410" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Sun;
