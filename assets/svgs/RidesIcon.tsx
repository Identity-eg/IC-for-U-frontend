import { IconProps } from "@/types/IconProps";

export default function RidesIcon(props: Partial<IconProps>) {
  const { fillColor = "white" } = props;
  return (
    <svg
      width="55"
      height="54"
      viewBox="0 0 55 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_44_89)">
        <path
          d="M51.1628 11.8949H48.878V4.69189C48.878 2.10449 46.7712 0 44.181 0H10.8136C8.22335 0 6.11658 2.10449 6.11658 4.69189V11.8949H3.83169C1.71474 11.8949 -0.00527954 13.6131 -0.00527954 15.7278V22.8291H2.53913V15.7278C2.53913 15.0161 3.11926 14.4366 3.83169 14.4366H6.11658V45.5566C6.11658 47.0308 7.08345 48.2813 8.41163 48.7134V50.6755C8.41163 52.5106 9.90266 54 11.7397 54H17.2204C19.0524 54 20.5485 52.5106 20.5485 50.6755V48.876H34.4511V50.6755C34.4511 52.5106 35.9422 54 37.7792 54H43.2599C45.0919 54 46.588 52.5106 46.588 50.6755V48.7134C47.9213 48.2813 48.883 47.0308 48.883 45.5566V14.4366H51.1679C51.8804 14.4366 52.4605 15.0161 52.4605 15.7278V22.8291H55.0049V15.7278C55.0049 13.6131 53.2849 11.8949 51.1679 11.8949H51.1628ZM8.66608 10.6292H26.2276V29.7577H8.66608V10.6292ZM18.0041 50.6755C18.0041 51.1076 17.6529 51.4583 17.2204 51.4583H11.7397C11.3072 51.4583 10.956 51.1076 10.956 50.6755V48.876H17.999V50.6755H18.0041ZM44.0385 50.6755C44.0385 51.1076 43.6874 51.4583 43.2548 51.4583H37.7741C37.3416 51.4583 36.9905 51.1076 36.9905 50.6755V48.876H44.0334V50.6755H44.0385ZM46.3335 45.5566C46.3335 45.9887 45.9824 46.3395 45.5499 46.3395H9.44466C9.01212 46.3395 8.66099 45.9887 8.66099 45.5566V32.2993H46.3335V45.5566ZM46.3335 29.7577H28.772V10.6292H46.3335V29.7577ZM46.3335 8.08755H8.66608V4.69189C8.66608 3.50748 9.63295 2.54165 10.8186 2.54165H44.1861C45.3718 2.54165 46.3386 3.50748 46.3386 4.69189V8.08755H46.3335Z"
          fill={fillColor}
        />
        <path
          d="M15.811 43.325C18.2689 43.325 20.2637 41.3273 20.2637 38.8771C20.2637 36.4269 18.2638 34.4292 15.811 34.4292C13.3582 34.4292 11.3582 36.4269 11.3582 38.8771C11.3582 41.3273 13.3582 43.325 15.811 43.325ZM15.811 36.9709C16.8644 36.9709 17.7193 37.8249 17.7193 38.8771C17.7193 39.9293 16.8644 40.7833 15.811 40.7833C14.7576 40.7833 13.9027 39.9293 13.9027 38.8771C13.9027 37.8249 14.7576 36.9709 15.811 36.9709Z"
          fill={fillColor}
        />
        <path
          d="M39.189 43.325C41.6469 43.325 43.6417 41.3273 43.6417 38.8771C43.6417 36.4269 41.6418 34.4292 39.189 34.4292C36.7362 34.4292 34.7363 36.4269 34.7363 38.8771C34.7363 41.3273 36.7362 43.325 39.189 43.325ZM39.189 36.9709C40.2424 36.9709 41.0973 37.8249 41.0973 38.8771C41.0973 39.9293 40.2424 40.7833 39.189 40.7833C38.1356 40.7833 37.2807 39.9293 37.2807 38.8771C37.2807 37.8249 38.1356 36.9709 39.189 36.9709Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_44_89">
          <rect width="55" height="54" fill={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}