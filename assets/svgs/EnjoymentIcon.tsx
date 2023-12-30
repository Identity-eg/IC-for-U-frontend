import { IconProps } from "@/types/IconProps";

export default function EnjoymentIcon(props: Partial<IconProps>) {
  const { fillColor = "white" } = props;
  return (
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.057 56.6197L50.2337 43.8826C49.627 43.28 48.8207 42.949 47.9626 42.949H35.3373L39.1297 22.5562L43.356 23.3258C43.3921 23.332 43.4283 23.3336 43.466 23.3352L53.6473 25.1882L62.026 26.7134C62.0825 26.7244 62.1391 26.729 62.1957 26.729C62.4252 26.729 62.6484 26.6463 62.8228 26.4917C63.0397 26.2997 63.156 26.0187 63.1371 25.7299C62.3042 13.1926 53.1868 2.85801 40.9246 0.499163C40.9152 0.497602 40.9057 0.492919 40.8963 0.491358L40.8743 0.486674C40.8601 0.483552 40.846 0.483552 40.8319 0.48043C40.7721 0.469502 40.7124 0.457013 40.6527 0.446085C40.6291 0.441402 40.6071 0.43828 40.5835 0.433596C40.5662 0.430474 40.549 0.425791 40.5301 0.422669C40.4342 0.405496 40.3368 0.389885 40.2393 0.374274C27.9834 -1.6661 15.8406 4.7813 10.6037 16.1665C10.4827 16.4288 10.4906 16.7332 10.6257 16.9892C10.7593 17.2453 11.0061 17.4248 11.2921 17.4779L19.4256 18.9594L30.2922 20.9373C30.333 20.9498 30.3739 20.9623 30.4179 20.9701L34.0815 21.6367L30.1177 42.949H18.8613L13.4202 37.5444L13.9766 36.9918C14.9793 35.9958 14.9793 34.3738 13.9766 33.3763L9.67959 29.1082C9.19394 28.6258 8.54798 28.3588 7.85958 28.3588C7.17118 28.3588 6.52522 28.6242 6.03957 29.1082L5.4832 29.6608H5.48163C4.87496 29.0567 4.06869 28.7241 3.21055 28.7241C2.35241 28.7241 1.54614 29.0567 0.939472 29.6592C-0.313157 30.9035 -0.313157 32.9267 0.939472 34.1709L15.2606 48.3958C15.5624 48.6955 15.9129 48.9265 16.2948 49.0858L10.1982 60.0448C9.94677 60.4975 10.1118 61.0673 10.5676 61.3171L13.4218 62.8829C13.5632 62.961 13.7204 63 13.8775 63C13.9656 63 14.0536 62.9875 14.1384 62.9641C14.3789 62.8954 14.5817 62.7346 14.7027 62.5176L22.0393 49.3309H28.9327L26.8675 60.4382C26.8219 60.6833 26.8769 60.9346 27.0184 61.1392C27.1598 61.3437 27.3783 61.4842 27.625 61.5294L30.8171 62.1117C30.8753 62.1227 30.9318 62.1273 30.9884 62.1273C31.4348 62.1273 31.8308 61.812 31.9141 61.3608L34.1522 49.3309H46.6329L58.5164 61.1329C59.1231 61.7355 59.9293 62.0665 60.7875 62.0665C61.6456 62.0665 62.4519 61.7339 63.0586 61.1329C63.6652 60.5303 64 59.7295 64 58.8771C64 58.0247 63.6652 57.2239 63.0586 56.6213L63.057 56.6197ZM61.7242 59.806C61.4743 60.0542 61.1411 60.1916 60.7875 60.1916C60.4339 60.1916 60.1007 60.0542 59.8508 59.806L47.6922 47.7292C47.5162 47.5543 47.2757 47.4544 47.0259 47.4544H17.5333C17.428 47.4544 17.3242 47.4404 17.2237 47.4169C16.9879 47.3607 16.7726 47.2437 16.5966 47.0688L2.2754 32.8439C1.75832 32.3303 1.75832 31.4951 2.2754 30.9815C2.53316 30.7255 2.87264 30.5959 3.21212 30.5959C3.5516 30.5959 3.89109 30.7239 4.14884 30.9815L17.8052 44.5461C17.9812 44.7209 18.2217 44.8208 18.4716 44.8208H47.9626C48.3162 44.8208 48.6494 44.9582 48.8993 45.2064L61.7226 57.9435C61.9725 58.1918 62.1108 58.5227 62.1108 58.874C62.1108 59.2252 61.9725 59.5562 61.7226 59.8044L61.7242 59.806ZM28.8934 59.8528L30.8517 49.3277H32.2348L30.2324 60.0979L28.895 59.8544L28.8934 59.8528ZM12.3059 60.1275L18.3144 49.3277H19.8845L13.5082 60.7879L12.3043 60.1275H12.3059ZM7.3755 30.432C7.50595 30.3024 7.67727 30.2322 7.86115 30.2322C8.04504 30.2322 8.21792 30.304 8.3468 30.432L12.6438 34.7001C12.9125 34.967 12.9125 35.3995 12.6438 35.6664L12.1581 36.1488L6.88828 30.9144L7.37393 30.432H7.3755ZM30.4745 2.4209C25.7752 5.14973 21.6149 10.2655 18.9934 16.9752L12.8512 15.8574C16.4928 8.81523 23.042 3.98357 30.4745 2.4209ZM61.149 24.6496L54.7632 23.4866C54.7067 16.1618 52.5707 9.81746 49.0407 5.61182C55.6622 9.65511 60.239 16.6099 61.149 24.6496ZM49.4179 9.43187C51.5649 13.1504 52.7782 17.9837 52.8725 23.1432L52.5173 23.0791L44.6196 21.6414C46.3107 11.7033 44.9104 6.22846 43.4283 3.37942C45.7701 4.59553 47.8054 6.64215 49.4164 9.43343L49.4179 9.43187ZM42.7635 21.3135L39.4739 20.7141L38.5466 20.5455L37.6193 20.3769L36.2818 20.1333L35.3546 19.9647L34.4273 19.7961L31.6941 19.2981C31.6941 19.2981 31.6941 19.2919 31.6957 19.2888C33.2689 11.402 35.6469 7.21821 37.3977 5.0826C38.7557 3.42469 39.9391 2.73468 40.5191 2.47241C40.9733 2.9267 41.8299 3.98826 42.5073 6.01302C43.3811 8.62789 44.112 13.3768 42.7666 21.3042C42.7666 21.3073 42.7666 21.3104 42.765 21.3135H42.7635ZM37.7074 2.08994C35.287 4.13656 31.8717 8.73561 29.8395 18.9484L20.8825 17.3186C22.8141 12.5276 25.673 8.43588 29.0081 5.71485C31.8088 3.42938 34.7746 2.20234 37.7074 2.08994ZM37.2751 22.2174L33.4198 42.9475H32.0367L35.9376 21.9739L37.2751 22.2174Z"
        fill={fillColor}
      />
    </svg>
  );
}
