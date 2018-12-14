import * as React from "react";
import { styled } from "src/theme";

interface Props {
  size: number;
  strokeWidth?: number;
}

const StyledLogo = styled.svg`
  color: inherit;
`;

export const Logo: React.SFC<Props> = ({ size, strokeWidth }) => (
  <StyledLogo width={size} height={size} viewBox="0 0 65.62 65.62" id="logo">
    <g
      id="group"
      className="group"
      transform="translate(0 -231.38)"
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-width={strokeWidth || 2}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path className="stem" id="path4700" d="M34.96 293.21V236.9l-3-1.74" />
      <path
        d="M55.45 246.9v-2.41l-20.49 11.94v27.47l20.49-11.75v-3"
        id="path4698"
      />
      <path id="path4700-6" d="M10.18 242.83l4.34 2.28.1 14.9 20.34 11.75" />
    </g>
  </StyledLogo>
);
