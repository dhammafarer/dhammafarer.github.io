import * as React from "react";
import { styled } from "src/theme";
import { Card } from "src/theme/primitives";

type Open = { open: boolean };

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 3;
`;

const Shape = styled(Card)`
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const Lines = styled.div<Open>``;

const Opened = styled(Lines)``;
const Closed = styled(Lines)``;

const Line = styled.div``;

interface Props {
  open: boolean;
  toggleMenu(): void;
}

export const MenuButton: React.SFC<Props> = ({ toggleMenu, open }) => (
  <Wrapper onClick={toggleMenu}>
    <Shape bg="salmon" shadow={1} />
    <Opened open={open}>
      <Line />
      <Line />
      <Line />
    </Opened>
    <Closed open={open}>
      <Line />
      <Line />
    </Closed>
  </Wrapper>
);
