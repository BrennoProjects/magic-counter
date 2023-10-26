import { useTheme } from 'styled-components';

const BackArrow = (): JSX.Element => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
    >
      <g clipPath="url(#clip0_12_409)">
        <path
          d="M17.1548 0.399422L0.488111 14.0361C0.175555 14.2918 0 14.6387 0 15.0003C0 15.3621 0.175666 15.7089 0.488222 15.9646L17.1549 29.6006C17.8058 30.1331 18.861 30.1331 19.5119 29.6006C20.1627 29.0681 20.1628 27.104 19.5119 26.5714L5.71429 15.0003L19.5118 3C19.8372 2.73373 20 2.06329 20 1.71428C20 1.36529 19.8373 0.665602 19.5118 0.39933C18.8609 -0.133125 17.8057 -0.133123 17.1548 0.399422Z"
          fill={theme.green}
        />
      </g>
      <defs>
        <clipPath id="clip0_12_409">
          <rect width="20" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackArrow;
