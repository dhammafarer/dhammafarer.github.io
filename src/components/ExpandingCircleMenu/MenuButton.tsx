import * as React from "react";
import { styled, css } from "src/theme";
import { Card } from "src/theme/primitives";

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

const Lines = styled.div<Open>`
  position: absolute;
  top: 18px;
  left: 15px;
  width: 46px;
  height: 46px;
`;

const Line = styled.div<{ open: boolean }>`
  position: absolute;
  background: black;
  width: 16px;
  height: 2px;
  border-radius: 2px;
`;

const First = styled(Line)`
  top: 0px;
  transform-origin: 0% 0%;
  transition: all 300ms linear 400ms;
  ${props =>
    props.open &&
    css`
      transform: scaleX(0);
      transition-delay: 0ms;
    `}
`;

const Second = styled(Line)`
  top: 5px;
  transform-origin: 100% 100%;
  transition: all 400ms linear 400ms;
  ${props =>
    props.open &&
    css`
      transform: scaleX(0);
      transition-delay: 0ms;
    `}
`;

const Third = styled(Line)`
  top: 10px;
  transform-origin: 0% 0%;
  transition: all 300ms linear 400ms;
  ${props =>
    props.open &&
    css`
      transform: scaleX(0);
      transition-delay: 0ms;
    `}
`;
const FirstC = styled(Line)`
  top: -5px;
  transform-origin: 0% 0%;
  transition: all 400ms linear 0ms;
  transform: rotate(45deg) scaleX(0) translateY(0px);
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg) scaleX(1) translateX(5px);
      transition-delay: 400ms;
    `}
`;

const SecondC = styled(Line)`
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
}

export const MenuButton: React.SFC<Props> = ({ toggleMenu, open }) => (
  <Wrapper onClick={toggleMenu}>
    <Shape open={open} bg={open ? "white.light" : "salmon"} shadow={1} />
    <Lines open={open}>
      <First open={open} />
      <Second open={open} />
      <Third open={open} />
    </Lines>
    <Lines open={open}>
      <FirstC open={open} />
      <SecondC open={open} />
    </Lines>
  </Wrapper>
);
