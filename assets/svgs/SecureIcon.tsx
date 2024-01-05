import { type IconProps } from '@/types/icon';

export default function SecureIcon(props: Partial<IconProps>) {
  const { fillColor = 'white' } = props;
  return (
    <svg
      width='60'
      height='51'
      viewBox='0 0 60 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_34_600)'>
        <path
          d='M58.6066 29.8245C53.3459 24.4695 42.6316 15.502 29.9994 15.502C17.3673 15.502 6.653 24.4801 1.39229 29.8245C-0.461279 31.7157 -0.461279 34.7863 1.39229 36.6669C6.653 42.0219 17.3673 50.9895 29.9994 50.9895C42.6316 50.9895 53.3459 42.0113 58.6066 36.6669C60.4601 34.7757 60.4601 31.7051 58.6066 29.8245ZM57.0744 35.1901C53.0244 39.3019 42.2887 48.8751 29.9994 48.8751C17.7101 48.8751 6.97443 39.3019 2.92443 35.1901C1.87443 34.1169 1.87443 32.3745 2.92443 31.312C6.97443 27.2001 17.7101 17.627 29.9994 17.627C42.2887 17.627 53.0244 27.2001 57.0744 31.312C58.1244 32.3851 58.1244 34.1276 57.0744 35.1901Z'
          fill={fillColor}
        />
        <path
          d='M30 21.6431C23.625 21.6431 18.45 26.8493 18.45 33.2456C18.45 39.6418 23.6357 44.8587 30 44.8587C36.3643 44.8587 41.55 39.6524 41.55 33.2456C41.55 26.8387 36.3643 21.6431 30 21.6431ZM30 42.7337C24.8143 42.7337 20.5929 38.4837 20.5929 33.2456C20.5929 28.0074 24.8143 23.7681 30 23.7681C35.1857 23.7681 39.4072 28.0181 39.4072 33.2456C39.4072 38.4731 35.1857 42.7337 30 42.7337Z'
          fill={fillColor}
        />
        <path
          d='M30 10.795C30.5893 10.795 31.0714 10.3169 31.0714 9.7325V1.0625C31.0714 0.478125 30.5893 0 30 0C29.4107 0 28.9286 0.478125 28.9286 1.0625V9.7325C28.9286 10.3169 29.4107 10.795 30 10.795Z'
          fill={fillColor}
        />
        <path
          d='M12.3429 13.6637C12.5464 13.8549 12.8143 13.9506 13.0714 13.9506C13.3607 13.9506 13.65 13.8337 13.8536 13.6106C14.2607 13.1856 14.2286 12.5056 13.8 12.1124L5.96785 4.89807C5.53928 4.49432 4.85357 4.5262 4.45714 4.9512C4.05 5.3762 4.08214 6.0562 4.51071 6.44932L12.3429 13.6637Z'
          fill={fillColor}
        />
        <path
          d='M46.9286 13.9506C47.1857 13.9506 47.4536 13.8549 47.6571 13.6637L55.4893 6.44932C55.9179 6.04557 55.95 5.3762 55.5429 4.9512C55.1357 4.5262 54.4607 4.49432 54.0321 4.89807L46.2 12.1124C45.7714 12.5162 45.7393 13.1856 46.1464 13.6106C46.3607 13.8337 46.6393 13.9506 46.9286 13.9506Z'
          fill={fillColor}
        />
        <path
          d='M30 28.4644C27.3429 28.4644 25.1786 30.6106 25.1786 33.2456C25.1786 35.8806 27.3429 38.0269 30 38.0269C32.6572 38.0269 34.8214 35.8806 34.8214 33.2456C34.8214 30.6106 32.6572 28.4644 30 28.4644ZM30 35.9019C28.5214 35.9019 27.3214 34.7119 27.3214 33.2456C27.3214 31.7794 28.5214 30.5894 30 30.5894C31.4786 30.5894 32.6786 31.7794 32.6786 33.2456C32.6786 34.7119 31.4786 35.9019 30 35.9019Z'
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id='clip0_34_600'>
          <rect width='60' height='51' fill={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}
