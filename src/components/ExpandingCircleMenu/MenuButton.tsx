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
  background: salmon;
  transition: all 400ms ease-out 400ms;
  ${props =>
    props.open &&
    css`
      transition-delay: 0ms;
    `}
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform: scale(${props => (props.open ? 1 : 0)});
    border-radius: 50%;
    transition: all 400ms ease-out 400ms;
  }
`;

const Lines = styled.div`
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
}

export const MenuButton: React.SFC<Props> = ({ toggleMenu, open }) => (
  <Wrapper onClick={toggleMenu}>
    <Shape open={open} shadow={1} />
    <Lines>
      <First open={open} />
      <Second open={open} />
      <Third open={open} />
    </Lines>
    <Lines>
      <Left open={open} />
      <Right open={open} />
    </Lines>
  </Wrapper>
);
