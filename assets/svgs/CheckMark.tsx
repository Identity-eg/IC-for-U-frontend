import { IconProps } from "@/types/IconProps";

export default function CheckMark(props: Partial<IconProps>) {
  const {
    size = 16,
    fillColor = "none",
    strokeColor = "black",
    strokeWidth = 1.5,
  } = props;

  return (
    <svg
      className={`w-[16px] h-[16px] flex-1`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M5 8.36003L7 10.36L11 6.36003M14.6667 8.36003C14.6667 12.0419 11.6819 15.0267 8 15.0267C4.3181 15.0267 1.33333 12.0419 1.33333 8.36003C1.33333 4.67813 4.3181 1.69336 8 1.69336C11.6819 1.69336 14.6667 4.67813 14.6667 8.36003Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
