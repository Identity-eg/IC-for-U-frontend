import { IconProps } from "@/types/icon";

export default function BurgerIcon(props: Partial<IconProps>) {
  const {
    size = 32,
    strokeColor = "black",
    strokeWidth = 1.5,
    className,
  } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.57153 8C4.57153 7.36881 5.08321 6.85714 5.71439 6.85714H27.4287C28.0599 6.85714 28.5715 7.36881 28.5715 8C28.5715 8.63119 28.0599 9.14286 27.4287 9.14286H5.71439C5.08321 9.14286 4.57153 8.63119 4.57153 8Z"
        fill="currentColor"
      />
      <path
        d="M4.57153 15.9998C4.57153 15.3686 5.08321 14.8568 5.71439 14.8568L18.2858 14.8571C18.917 14.8571 19.4287 15.3688 19.4287 16C19.4287 16.6312 18.917 17.1429 18.2858 17.1429L5.71439 17.1426C5.08321 17.1426 4.57153 16.6309 4.57153 15.9998Z"
        fill="currentColor"
      />
      <path
        d="M5.71439 22.8569C5.08321 22.8569 4.57153 23.3686 4.57153 23.9998C4.57153 24.6309 5.08321 25.1425 5.71439 25.1425H25.143C25.7742 25.1425 26.2858 24.6309 26.2858 23.9998C26.2858 23.3686 25.7742 22.8569 25.143 22.8569H5.71439Z"
        fill="currentColor"
      />
    </svg>
  );
}
