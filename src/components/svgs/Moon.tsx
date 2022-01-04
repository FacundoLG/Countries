import { FC } from "react";
interface SunInterface {
  size?: number,
  onClick?: () => any
}
const Moon:FC<SunInterface> = ({size, onClick}) => {
  return (
    <svg
      data-testid="moon"
      onClick={onClick}
      width={size || 22}
      height={(size ||22) + 1}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.3947" cy="17.1842" r="14.6053" fill="#C4C4C4" />
      <g filter="url(#filter0_d_1_146)">
        <ellipse
          cx="20.2542"
          cy="4.99945"
          rx="4.43019"
          ry="2.95346"
          transform="rotate(15 20.2542 4.99945)"
          fill="#545454"
        />
        <path
          d="M24.0505 6.01665C23.8961 6.59272 23.3903 7.07951 22.5793 7.35385C21.7724 7.62684 20.7188 7.66395 19.6192 7.36931C18.5196 7.07466 17.6257 6.51575 17.0634 5.87585C16.4982 5.23279 16.3036 4.5583 16.4579 3.98224C16.6123 3.40617 17.1181 2.91938 17.9291 2.64504C18.736 2.37205 19.7896 2.33494 20.8892 2.62958C21.9888 2.92423 22.8827 3.48314 23.445 4.12304C24.0102 4.7661 24.2048 5.44059 24.0505 6.01665Z"
          stroke="#C4C4C4"
        />
      </g>
      <g filter="url(#filter1_d_1_146)">
        <ellipse
          cx="4.17236"
          cy="12.6884"
          rx="3.23604"
          ry="2.15736"
          transform="rotate(-69.0358 4.17236 12.6884)"
          fill="#545454"
        />
        <path
          d="M5.15127 10.1335C5.50289 10.2682 5.79646 10.6259 5.92784 11.2076C6.05828 11.7852 6.00933 12.5263 5.72001 13.2814C5.43068 14.0365 4.97194 14.6206 4.48891 14.9631C4.00246 15.3081 3.54507 15.3781 3.19344 15.2434C2.84182 15.1086 2.54825 14.751 2.41688 14.1692C2.28643 13.5916 2.33538 12.8506 2.62471 12.0954C2.91404 11.3403 3.37278 10.7563 3.8558 10.4137C4.34225 10.0687 4.79965 9.99878 5.15127 10.1335Z"
          stroke="#C4C4C4"
        />
      </g>
      <g filter="url(#filter2_d_1_146)">
        <ellipse
          cx="14.4765"
          cy="18.5104"
          rx="4.43019"
          ry="4.28003"
          transform="rotate(-69.0358 14.4765 18.5104)"
          fill="#545454"
        />
        <path
          d="M15.8827 14.8403C17.8171 15.5815 18.7888 17.8206 18.0063 19.8628C17.2238 21.905 15.0047 22.9216 13.0703 22.1804C11.1359 21.4392 10.1642 19.2001 10.9467 17.1579C11.7292 15.1157 13.9482 14.0992 15.8827 14.8403Z"
          stroke="#C4C4C4"
        />
      </g>
      <g filter="url(#filter3_d_1_146)">
        <ellipse
          cx="22.3712"
          cy="27.5084"
          rx="3.05946"
          ry="3.86204"
          transform="rotate(-114.952 22.3712 27.5084)"
          fill="#545454"
        />
        <path
          d="M21.2915 25.1879C23.0791 24.3561 24.8663 24.9013 25.4195 26.0901C25.9726 27.2789 25.2386 28.9972 23.451 29.829C21.6633 30.6608 19.8762 30.1156 19.323 28.9267C18.7698 27.7379 19.5039 26.0196 21.2915 25.1879Z"
          stroke="#C4C4C4"
        />
      </g>
      <g filter="url(#filter4_d_1_146)">
        <ellipse
          cx="26.3388"
          cy="14.1712"
          rx="2.50147"
          ry="3.15768"
          transform="rotate(165 26.3388 14.1712)"
          fill="#545454"
        />
        <path
          d="M24.4055 14.6892C23.9959 13.1605 24.682 11.8637 25.6509 11.6041C26.6198 11.3445 27.8624 12.1244 28.272 13.6532C28.6817 15.1819 27.9955 16.4787 27.0266 16.7383C26.0577 16.9979 24.8151 16.218 24.4055 14.6892Z"
          stroke="#C4C4C4"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_146"
          x="14.9065"
          y="0.924011"
          width="10.6954"
          height="8.15088"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_146"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_146"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_146"
          x="0.848404"
          y="8.56882"
          width="6.6479"
          height="8.2392"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_146"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_146"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_146"
          x="9.1758"
          y="13.0979"
          width="10.6014"
          height="10.8249"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_146"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_146"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1_146"
          x="17.6384"
          y="23.2909"
          width="9.46573"
          height="8.43497"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_146"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_146"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_1_146"
          x="22.7874"
          y="10.0525"
          width="7.10281"
          height="8.23737"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_146"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_146"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Moon;
