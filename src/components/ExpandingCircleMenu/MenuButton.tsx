import * as React from "react";
import { styled, css } from "src/theme";
import { Box, Card } from "src/theme/primitives";

type Open = { open: boolean };

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 3;
`;

const Shape = styled(Card)<Open>`
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  transition: all 400ms ease-out 400ms;
  ${props =>
    props.open &&
    css`
      transition-delay: 0ms;
    `}
`;

const ShapeOverlay = styled(Box)<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(${props => (props.open ? 1 : 0)});
  border-radius: 50%;
  transition: all 400ms ease-out 400ms;
`;

const Lines = styled(Box)`
  position: absolute;
  top: 18px;
  left: 15px;
  width: 46px;
  height: 46px;
`;

const Line = styled(Box)<{ open: boolean }>`
  position: absolute;
  width: 16px;
  height: 2px;
  border-radius: 2px;
`;

const First = styled(Line)`
  top: 0px;
  transform-origin: 0% 0%;
  transition: all 400ms ease-out 400ms;
  transform: scaleX(1) translateX(0px);
  ${props =>
    props.open &&
    css`
      transform: scaleX(0) translateX(-15px);
      transition-delay: 0ms;
    `}
`;

const Second = styled(Line)`
  top: 5px;
  transform-origin: 100% 100%;
  transition: all 400ms ease-out 400ms;
  transform: scaleX(1) translateX(0);
  ${props =>
    props.open &&
    css`
      transform: scaleX(0) translateX(15px);
      transition-delay: 0ms;
    `}
`;

const Third = styled(First)`
  top: 10px;
`;
const Left = styled(Line)`
  top: -5px;
  transform-origin: 0% 0%;
  transition: all 400ms linear 0ms;
  transform: rotate(45deg) scaleX(0) translateY(0px);
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg) scaleX(1) translateX(5px);
      transition-delay: 500ms;
    `}
`;

const Right = styled(Line)`
  top: -5px;
  left: 2px;
  transform-origin: 100% 100%;
  transition: all 400ms linear 0ms;
  transform: rotate(-45deg) scaleX(0) translateY(0px);
  ${props =>
    props.open &&
    css`
      transform: rotate(-45deg) scaleX(1) translateX(-5px);
      transition-delay: 400ms;
    `}
`;

interface Props {
  open: boolean;
  toggleMenu(): void;
  bg: string;
  fg: string;
}

export const MenuButton: React.SFC<Props> = ({ toggleMenu, open, bg, fg }) => (
  <Wrapper onClick={toggleMenu}>
    <Shape open={open} shadow={1} bg={bg}>
      <ShapeOverlay open={open} bg={fg} />
    </Shape>
    <Lines>
      <First bg={fg} open={open} />
      <Second bg={fg} open={open} />
      <Third bg={fg} open={open} />
    </Lines>
    <Lines>
      <Left bg={bg} open={open} />
      <Right bg={bg} open={open} />
    </Lines>
  </Wrapper>
);
