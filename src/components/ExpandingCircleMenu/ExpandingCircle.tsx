import * as React from "react";
import { MenuButton } from "./MenuButton";
import { Box, Flex, Text } from "src/theme/primitives";
import { styled, css } from "src/theme";
import { Motion, spring } from "react-motion";

type Open = { open: boolean };

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
`;

const MenuWrapper = styled(Flex)<Open>`
  position: absolute;
  top: 0;
  right: 0;
  ${props =>
    props.open &&
    css`
      left: 0;
      bottom: 0;
    `}
  overflow: hidden;
`;

const MenuItems = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const MenuItem = styled(Box)<{ open: boolean; i: number }>`
  opacity: ${props => (props.open ? 1 : 0)};
  transform: translateY(${props => (props.open ? "0px" : "-5px")});
  transition: all 200ms ease-out;
  transition-delay: ${props => (props.open ? `${400}ms` : "0ms")};
`;

interface Props {
  title: React.ReactNode;
  logo: any;
  navItems: { label: React.ReactNode; to: string }[];
  open: boolean;
  toggleMenu(): void;
  bg: string;
  fg: string;
}

interface State {
  animating: boolean;
}

export class ExpandingCircle extends React.Component<Props, State> {
  state: State = { animating: false };

  componentDidUpdate(pp: Props, ps: State) {
    if (pp.open !== this.props.open) this.setState({ animating: true });
  }

  onRest = () => {
    this.setState({ animating: false });
  };

  render() {
    const { navItems, open, toggleMenu, bg, fg } = this.props;
    return (
      <Box>
        <ButtonWrapper>
          <MenuButton bg={bg} fg={fg} open={open} toggleMenu={toggleMenu} />
        </ButtonWrapper>
        <MenuWrapper open={this.state.animating || this.props.open}>
          <Motion
            defaultStyle={{ x: 0, opacity: 0 }}
            style={{
              x: spring(open ? 20 : 0),
              opacity: spring(open ? 1 : 0),
            }}
            onRest={this.onRest}
          >
            {styles => (
              <>
                <Box width={1} bg={bg} style={{ opacity: styles.opacity }} />
                <Shape
                  style={{ transform: `scale(${styles.x})` }}
                  open={open}
                  bg={bg}
                />
              </>
            )}
          </Motion>
          <MenuItems flexDirection="column">
            {navItems.map((x, i) => (
              <MenuItem i={i} open={open} m={2} color="white.light">
                <Text fontSize={3}>{x.label}</Text>
              </MenuItem>
            ))}
          </MenuItems>
        </MenuWrapper>
      </Box>
    );
  }
}
