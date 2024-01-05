import { IconProps } from '@/types/icon';

export default function FoodIcon(props: Partial<IconProps>) {
  const { fillColor = 'white' } = props;
  return (
    <svg
      width='47'
      height='71'
      viewBox='0 0 47 71'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_44_40)'>
        <path
          d='M13.4813 29.7091C17.9341 28.7439 21.2568 24.8167 21.2568 17.1953C21.2568 8.30922 16.7481 1.10938 11.1878 1.10938C5.62746 1.10938 1.11877 8.30922 1.11877 17.1953C1.11877 24.8167 4.44155 28.7439 8.8943 29.7091L7.83146 66.5625C7.77552 68.4041 9.33063 69.8906 11.1878 69.8906C13.045 69.8906 14.6001 68.4041 14.5442 66.5625L13.4813 29.7091Z'
          stroke={fillColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M44.7513 1.10938L45.87 23.2969C46.0267 26.3698 43.3752 28.8438 40.2761 28.8438L41.3949 66.5625C41.4509 68.4041 39.8958 69.8906 38.0386 69.8906C36.1814 69.8906 34.6263 68.4041 34.6822 66.5625L35.801 28.8438C32.702 28.8438 30.0505 26.3698 30.2071 23.2969L31.3259 1.10938'
          stroke={fillColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M40.2761 1.10938V24.4062'
          stroke={fillColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M35.801 1.10938V24.4062'
          stroke={fillColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_44_40'>
          <rect width='47' height='71' fill={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}
