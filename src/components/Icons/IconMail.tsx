import { FC } from "react";

type IconProps = {
  width?: number;
};

const IconMail: FC<IconProps> = ({ width = 24 }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="inherit">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.54433 5.16792C3.0468 4.46923 3.86451 4 4.8 4H19.2C20.1355 4 20.9532 4.46923 21.4557 5.16792C21.7993 5.64567 22 6.235 22 6.86667V17.1333C22 18.682 20.7804 20 19.2 20H4.8C3.21964 20 2 18.682 2 17.1333V6.86667C2 6.23499 2.20074 5.64567 2.54433 5.16792ZM4.9327 6L11.2598 12.9647C11.6566 13.4015 12.3434 13.4015 12.7402 12.9647L19.0673 6H4.9327ZM20 7.94766L14.2205 14.3096C13.0301 15.6199 10.9699 15.6199 9.77948 14.3096L4 7.94766V17.1333C4 17.6466 4.39214 18 4.8 18H19.2C19.6079 18 20 17.6466 20 17.1333V7.94766Z"
        fill="inherit"
      />
    </svg>
  );
};

export default IconMail;
