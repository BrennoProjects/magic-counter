import type { FC } from 'react';
import React from 'react';

interface MinusIconProps {
  width: number
  height: number
}
const MinusIcon: FC<MinusIconProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83334 14.0833L27.1667 14.0833V17.4166L3.83334 17.4166V14.0833Z" fill="white" />
    </svg>
  );
};

export default MinusIcon;
