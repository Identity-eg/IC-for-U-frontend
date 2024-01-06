import { IconProps } from "@/types/icon";

export default function LogoIcon(props: Partial<IconProps>) {
  const { fillColor = "black", className } = props;
  return (
    <svg
      width="130"
      height="65"
      viewBox="0 0 130 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_127_56)">
        <path
          d="M70.17 51.0499C59.28 55.9799 49.81 51.5399 40.86 43.1399C41.16 52.5299 46.89 60.3099 55.5 63.4799C64.38 66.7499 75.4 64.4899 81.43 57.9399L78.64 53.5299C76.84 50.6899 73.23 49.6599 70.17 51.0499Z"
          fill="currentColor"
        />
        <path
          d="M61.3 33.9601C56.59 33.7801 52.9 37.0901 53.07 42.2001C53.23 46.8201 57.22 50.3701 61.77 49.9401C66.59 49.4901 69.45 45.6501 68.88 41.6301C66.46 41.2801 63.69 41.6801 62.51 40.5001C61.31 39.3001 61.69 36.5301 61.3 33.9601Z"
          fill="currentColor"
        />
        <path d="M33.4 44.6101H32.9V45.1101H33.4V44.6101Z" fill="currentColor" />
        <path
          d="M86.89 20.8199C89.79 20.7799 92.5 19.9099 95.04 18.2199C94.88 18.7099 94.78 19.2099 94.78 19.7399C94.78 20.2699 94.93 20.6799 95.23 20.9799C95.53 21.2799 95.92 21.4299 96.4 21.4299C97.22 21.4299 98.08 20.9499 98.99 19.9899C99.28 20.0899 99.63 20.1299 100.03 20.1299C100.8 20.1299 101.57 19.9799 102.33 19.6799C103.06 19.3899 103.71 19.0299 104.27 18.5899C104.03 19.0899 103.84 19.5399 103.7 19.9499C103.58 20.2599 103.68 20.4899 103.99 20.6299H104.03C104.32 20.7299 104.55 20.6499 104.71 20.4099C105.48 19.2799 106.61 18.0899 108.09 16.8499C109.58 15.5999 110.51 14.9799 110.9 14.9799C111 14.9799 111.07 15.0099 111.13 15.0699C111.19 15.1299 111.23 15.2099 111.26 15.2999C111.28 15.3999 111.31 15.5599 111.33 15.7999C111.45 17.2899 112 18.0299 112.99 18.0299C113.98 18.0299 115.22 17.5599 116.66 16.6299C116.8 16.5299 116.88 16.3899 116.88 16.1999C116.88 16.0599 116.83 15.9399 116.72 15.8399C116.61 15.7399 116.5 15.6999 116.38 15.6999C116.24 15.6999 116.13 15.7199 116.06 15.7699C114.96 16.5899 113.94 16.9899 113 16.9899C112.78 16.9899 112.64 16.9099 112.57 16.7599C112.5 16.5999 112.44 16.2499 112.39 15.6999C112.34 15.0799 112.23 14.6299 112.05 14.3699C111.87 14.1099 111.59 13.9699 111.2 13.9699C110.74 13.9699 110.05 14.2899 109.13 14.9199C108.21 15.5599 107.29 16.3199 106.38 17.2099C106.26 17.3299 106.18 17.3899 106.13 17.3899C106.11 17.3899 106.12 17.3499 106.17 17.2799C106.84 16.0599 107.44 15.1099 107.97 14.4399C108.04 14.3699 108.08 14.2599 108.08 14.1199C108.08 13.7799 107.9 13.6199 107.54 13.6199C107.4 13.6199 107.26 13.6799 107.14 13.7999C106.8 14.2299 106.37 14.8799 105.86 15.7299C105.82 15.7599 105.78 15.7799 105.74 15.8099C105.26 16.4799 104.5 17.1999 103.45 17.9499C102.4 18.6999 101.27 19.0799 100.05 19.0799H99.76C100.6 17.8999 101.02 16.7899 101.02 15.7299C101.02 15.1799 100.87 14.7399 100.57 14.4199C100.27 14.0999 99.87 13.9299 99.36 13.9299C98.85 13.9299 98.44 14.0899 98.03 14.3999C97.62 14.7099 97.32 15.1199 97.13 15.6199L97.17 15.6899C97.1 15.6199 97.01 15.5899 96.92 15.6199C96.75 15.6199 96.63 15.6699 96.56 15.7599C93.75 18.2299 90.73 19.5499 87.49 19.7199L89.11 16.8399C89.18 16.8199 89.29 16.7599 89.43 16.6599C92.07 14.9599 94.26 13.2399 96 11.5099C97.74 9.77993 98.61 8.44993 98.61 7.50993C98.61 7.19993 98.51 6.93993 98.3 6.73993C98.09 6.53993 97.83 6.42993 97.49 6.42993C96.19 6.42993 94.47 7.77993 92.32 10.4799C90.17 13.1799 88.17 16.2699 86.33 19.7499C86.14 19.7499 85.99 19.7399 85.9 19.7099H85.86C85.74 19.7099 85.63 19.7599 85.52 19.8699C85.41 19.9799 85.36 20.0999 85.36 20.2499V20.3899C85.41 20.5099 85.46 20.7099 85.5 20.9999C85.52 21.0199 85.54 21.0699 85.55 21.1399C85.56 21.2099 85.57 21.2599 85.57 21.2799C83.96 24.5399 83.16 26.8699 83.16 28.2599C83.16 28.6699 83.27 28.9999 83.48 29.2499C83.69 29.4999 84 29.6299 84.38 29.6299C85.12 29.6299 85.74 29.1899 86.23 28.2999C86.72 27.4099 86.97 26.3299 86.97 25.0599C86.97 24.0499 86.85 22.8299 86.61 21.3899L86.9 20.7799L86.89 20.8199ZM98.34 15.5299C98.6 15.1699 98.94 14.9899 99.35 14.9899C99.76 14.9899 99.96 15.2399 99.96 15.7499C99.96 16.6599 99.55 17.6599 98.74 18.7399C98.21 18.3599 97.95 17.7399 97.95 16.8999C97.95 16.3499 98.08 15.8899 98.35 15.5299H98.34ZM96.89 16.9999V16.8899C96.89 18.0699 97.26 18.9299 98.01 19.4799C97.43 20.0799 96.89 20.3799 96.39 20.3799C96.01 20.3799 95.81 20.1599 95.81 19.7299C95.81 18.8199 96.17 17.9099 96.89 16.9899V16.9999ZM94.48 9.42993C95.73 8.14993 96.7 7.49993 97.4 7.49993C97.5 7.49993 97.54 7.54993 97.54 7.63993C97.54 8.21993 96.84 9.19993 95.45 10.5899C94.06 11.9799 92.37 13.3699 90.37 14.7699C91.86 12.4899 93.23 10.7099 94.47 9.41993L94.48 9.42993ZM85.47 27.5899C85.17 28.3099 84.83 28.6699 84.44 28.6699C84.25 28.6699 84.15 28.5499 84.15 28.3099C84.15 27.2499 84.7 25.5299 85.81 23.1299C85.88 23.9199 85.92 24.5799 85.92 25.1099C85.92 26.0499 85.77 26.8699 85.47 27.5899Z"
          fill="currentColor"
        />
        <path
          d="M121.77 22.27C118.97 22.27 116.7 24.54 116.7 27.34V45.07C116.7 45.22 116.7 45.37 116.69 45.52C116.69 46.69 116.59 47.74 116.41 48.64C118.34 48.99 120.25 48.85 122.23 48.28C123.56 47.9 125.08 47.77 126.53 47.65C127.41 47.58 128.31 47.73 129.43 47.79H129.48V46.67C129.5 46.28 129.51 45.89 129.51 45.49V22.27H121.77Z"
          fill="currentColor"
        />
        <path
          d="M99.07 48.23C101.1 48.92 103.12 49.02 105.16 48.59C104.99 47.7 104.9 46.67 104.89 45.52C104.88 45.37 104.88 45.22 104.88 45.07V28.09C104.88 24.88 102.27 22.27 99.06 22.27H91.85V45.49C91.85 45.77 91.85 46.05 91.86 46.32C91.84 46.8 91.86 47.29 91.86 47.83C91.88 47.83 91.91 47.83 91.93 47.82C92.4 47.78 92.72 47.74 93.03 47.71C95.11 47.54 97.14 47.57 99.07 48.23Z"
          fill="currentColor"
        />
        <path
          d="M100.35 52.3399C102.11 52.8699 104.06 52.7999 105.81 52.2099C106.06 52.1299 106.3 52.0499 106.55 51.9799C106.52 51.9599 106.5 51.9399 106.48 51.9099C106.04 51.3599 105.69 50.6399 105.44 49.7699C102.97 50.2199 100.54 50.0499 98.07 49.2199C96.43 48.6799 94.67 48.6499 92.92 48.9499C92.66 48.9999 92.29 49.1299 92.08 49.2699C92.17 50.0699 92.3 50.8299 92.46 51.5699C95.31 51.1199 97.82 51.5899 100.35 52.3399Z"
          fill="currentColor"
        />
        <path
          d="M123.2 49.2399C120.83 50.0299 118.49 50.2099 116.14 49.8099C115.89 50.6699 115.55 51.3599 115.12 51.9099C115.08 51.9599 115.05 51.9999 115 52.0499C115.16 52.0999 115.32 52.1499 115.48 52.1999C117.34 52.8099 119.38 52.8599 121.26 52.2799C123.68 51.5299 126.11 51.1599 128.9 51.5799C129.07 50.8299 129.2 50.0499 129.29 49.2399C129.09 49.0699 128.76 48.9799 128.35 48.9199C126.58 48.6699 124.84 48.6999 123.2 49.2399Z"
          fill="currentColor"
        />
        <path
          d="M123.38 52.9799C120.2 54.0499 117.09 54.0599 113.9 53.0499C113.84 53.0299 113.77 53.0099 113.71 52.9899C111.77 52.3499 109.65 52.3199 107.72 52.9599C107.69 52.9699 107.65 52.9799 107.62 52.9899C104.32 54.0599 101.13 54.0599 97.84 52.9399C96.24 52.4099 94.46 52.4299 92.75 52.7699C92.98 53.6299 93.27 54.4399 93.6 55.2199C95.62 55.1199 97.51 55.2299 99.33 55.8599C101.62 56.6399 103.97 56.6099 106.28 55.8599C109.23 54.9199 112.16 54.9299 115.1 55.8699C117.38 56.6099 119.69 56.6399 121.94 55.8799C123.81 55.2499 125.75 55.0899 127.77 55.2199C128.1 54.4399 128.38 53.6199 128.61 52.7599C126.83 52.4499 125.04 52.4199 123.38 52.9799Z"
          fill="currentColor"
        />
        <path
          d="M123.27 56.79C120.1 57.83 116.99 57.82 113.8 56.79C111.74 56.12 109.56 56.13 107.49 56.8C104.35 57.82 101.26 57.83 98.13 56.8C96.9 56.4 95.61 56.26 94.13 56.37C94.6 57.31 95.16 58.17 95.78 58.98C96.92 59.21 98.13 59.33 99.21 59.64C101.64 60.34 104 60.38 106.39 59.61C109.26 58.69 112.14 58.7 115 59.63C117.36 60.39 119.68 60.33 122.08 59.65C123.18 59.34 124.38 59.2 125.55 59.02C126.19 58.2 126.75 57.32 127.23 56.37C125.8 56.24 124.5 56.38 123.27 56.79Z"
          fill="currentColor"
        />
        <path
          d="M114.25 60.6899C111.85 59.9099 109.47 59.9199 107.08 60.6899C104.22 61.6099 101.35 61.5899 98.47 60.6899C97.96 60.5199 97.43 60.4099 96.9 60.2899C96.72 60.2499 96.55 60.1999 96.38 60.1599C96.34 60.2399 96.29 60.3199 96.24 60.3899C97.17 61.1599 98.24 61.8199 99.4 62.3999C99.43 62.4199 99.46 62.4399 99.49 62.4499C100.2 62.8099 100.95 63.1399 101.73 63.4599C103.09 64.0099 104.4 64.0399 105.73 63.5799C109.04 62.4499 112.3 62.4499 115.62 63.5599C116.36 63.8099 117.43 64.0299 118.13 63.8599C119.45 63.5299 120.65 63.0899 121.74 62.5399C121.76 62.5299 121.79 62.5199 121.81 62.4999C122.74 61.8899 123.61 61.1699 124.4 60.3499C123.86 60.4199 123.34 60.5399 122.85 60.6899C119.98 61.5999 117.11 61.6099 114.25 60.6899Z"
          fill="currentColor"
        />
        <path
          d="M106.92 64.6999C109.44 65.0499 111.87 65.0399 114.51 64.6899C112.34 63.6399 108.65 63.6599 106.92 64.6999Z"
          fill="currentColor"
        />
        <path
          d="M55.73 5.73998C61.3 7.24998 64.84 12.26 65.11 18.68C65.11 18.76 65.11 18.83 65.11 18.91C61.54 18.77 57.92 19.35 54.61 20.7C46.54 24 40.91 31.97 41.06 40.38C49.9 32.07 59.29 27.89 69.85 32.46C73.16 33.89 77.01 32.73 78.94 29.69C79.78 28.37 80.58 27.09 81.38 25.83C78.05 22.34 73.43 20.12 68.5 19.28C68.64 17.5 68.57 15.69 68.24 13.85C67.54 9.96998 65.99 6.53998 62.66 4.22998C57.75 0.819978 52.27 -0.230022 46.42 0.809978C42.37 1.52998 39.02 3.67998 35.98 6.35998C35.64 6.65998 35.29 6.92998 34.93 7.22998C30.9 3.16998 26.21 0.619978 20.54 0.119978C15.88 -0.290022 11.41 0.319978 7.55001 3.21998C0.840014 8.24998 -1.11999 15.04 0.570014 23.01C2.11001 30.26 5.67001 36.51 10.57 41.99C13.28 45.02 16.18 47.74 19.26 50.19V64.33H25.95C29.64 64.33 32.64 61.34 32.64 57.64V24.95C32.64 21.26 29.65 18.26 25.95 18.26H19.26V44.47C15.21 40.54 11.65 36.21 9.18001 31C6.95001 26.32 5.24001 21.51 5.84001 16.16C6.35001 11.61 9.22001 7.88998 13.6 6.51998C18.84 4.88998 23.7 5.86998 28.24 8.80998C30.82 10.48 32.93 12.64 34.87 15.12C35.2 14.77 35.49 14.47 35.77 14.17C37.8 11.96 39.79 9.68998 42.37 8.08998C46.51 5.52998 50.96 4.43998 55.74 5.73998H55.73Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_56">
          <rect width="129.51" height="64.95" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
