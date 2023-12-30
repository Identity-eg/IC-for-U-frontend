import { IconProps } from "@/types/IconProps";

export default function HealthCareIcon(props: Partial<IconProps>) {
  const { fillColor = "white" } = props;
  return (
    <svg
      width="68"
      height="57"
      viewBox="0 0 68 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_37_617)">
        <path
          d="M23.2353 18.2307C22.7569 17.411 22.3823 16.535 22.1525 15.6098C21.0203 11.0653 22.7433 6.09735 26.838 3.29616C28.8352 1.92873 31.1064 1.27563 33.3573 1.27563C37.0417 1.27563 40.6631 3.03084 42.9003 6.29634L43.2391 6.83039L43.5746 6.29634C45.8135 3.03084 49.4349 1.27563 53.1176 1.27563C55.3684 1.27563 57.6397 1.93044 59.6369 3.29616C63.7316 6.09565 65.4546 11.0653 64.3224 15.6098C63.8491 17.5113 62.7679 19.2087 61.4127 20.6254L55.7345 26.5663"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4352 18.5487H29.5792L33.817 11.9854L38.9128 24.7293L42.1682 17.7935H47.8055"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2326 36.3238L22.8182 29.5955C23.4856 29.2384 24.2296 29.053 24.9873 29.053H42.0831C43.9083 29.053 45.3878 30.531 45.3878 32.3542C45.3878 34.1774 43.9083 35.6554 42.0831 35.6554H28.9118"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6622 49.4333L23.3239 46.8788C24.1615 46.4196 25.1014 46.1797 26.0565 46.1797H43.6341C44.4718 46.1797 45.2959 45.9825 46.0433 45.6049L64.5744 36.2336C66.4745 35.2726 67.2577 32.9715 66.3383 31.053C65.441 29.1821 63.2395 28.3368 61.319 29.1243L43.3106 35.4172"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.27695 38.6437L8.38869 34.2676L19.3091 51.4897L12.7712 55.7246"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_617">
          <rect width="68" height="57" fill={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}
