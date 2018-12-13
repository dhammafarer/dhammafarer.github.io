import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { MenuButton } from "./MenuButton";
import { Box, Flex } from "src/theme/primitives";
import { styled, css } from "src/theme";
import { Motion, spring } from "react-motion";

type Open = { open: boolean };

const Wrapper = styled(Box)<{ open: boolean }>`
  background: grey;
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Shape = styled(Box)<{ open: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  z-index: 2;
  background: salmon;
`;

const MenuWrapper = styled(Flex)<Open>`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  ${props =>
    props.open &&
    css`
      left: 0;
      bottom: 0;
    `}
`;

interface Props {
  title: React.ReactNode;
  logo: any;
  navItems: { label: React.ReactNode; to: string }[];
}

export const ExpandingCircleMenu: React.SFC<Props> = ({
  title,
  logo,
  navItems,
}) => (
  <MakeMenu>
    {({ open, toggleMenu }) => (
      <Wrapper open={open}>
        <ButtonWrapper>
          <MenuButton open={open} toggleMenu={toggleMenu} />
        </ButtonWrapper>
        <MenuWrapper open={open}>
          <Motion defaultStyle={{ x: 0 }} style={{ x: spring(open ? 20 : 0) }}>
            {styles => (
              <Shape style={{ transform: `scale(${styles.x})` }} open={open} />
            )}
          </Motion>
        </MenuWrapper>
      </Wrapper>
    )}
  </MakeMenu>
);
