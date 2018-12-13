import * as React from "react";
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
  ${props => props.theme.devices[2]} {
    height: 100px;
    width: 100px;
  }
  border-radius: 50%;
  z-index: 2;
  background: salmon;
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

interface Props {
  title: React.ReactNode;
  logo: any;
  navItems: { label: React.ReactNode; to: string }[];
  open: boolean;
  toggleMenu(): void;
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
    console.log("resting");
    this.setState({ animating: false });
  };

  render() {
    const { open, toggleMenu } = this.props;
    return (
      <Wrapper open={open}>
        <ButtonWrapper>
          <MenuButton open={open} toggleMenu={toggleMenu} />
        </ButtonWrapper>
        <MenuWrapper open={this.state.animating || this.props.open}>
          <Motion
            defaultStyle={{ x: 0, opacity: 0 }}
            style={{
              x: spring(open ? 10 : 0),
              opacity: spring(open ? 1 : 0),
            }}
            onRest={this.onRest}
          >
            {styles => (
              <>
                <Box
                  width={1}
                  bg="salmon"
                  style={{ opacity: styles.opacity }}
                />
                <Shape
                  style={{ transform: `scale(${styles.x})` }}
                  open={open}
                />
              </>
            )}
          </Motion>
        </MenuWrapper>
      </Wrapper>
    );
  }
}
