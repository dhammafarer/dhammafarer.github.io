import { Flex, styled, css } from "themed-primitives";

export const NavWrapper = styled(Flex)<{ open: boolean }>`
  height: 100%;
  opacity: 0;
  transform: translateY(-8px);
  transition-delay: 0ms;
  transition: all 200ms ease-out;
  ${props =>
    props.open &&
    css`
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 400ms;
    `}
`;
