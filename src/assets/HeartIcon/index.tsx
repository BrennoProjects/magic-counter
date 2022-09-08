import type { FC } from 'react';
import React from 'react';

interface HeartIconProps{
  width: number
  height: number
}
const HeartIcon: FC<HeartIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.99999 18.0417L8.79166 16.9417C4.49999 13.05 1.66666 10.475 1.66666 7.33333C1.66666 4.75833 3.68332 2.75 6.24999 2.75C7.69999 2.75 9.09166 3.425 9.99999 4.48333C10.9083 3.425 12.3 2.75 13.75 2.75C16.3167 2.75 18.3333 4.75833 18.3333 7.33333C18.3333 10.475 15.5 13.05 11.2083 16.9417L9.99999 18.0417Z" fill="white" />
    </svg>
  );
};

export default HeartIcon;
