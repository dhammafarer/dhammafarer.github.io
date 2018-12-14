import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { ExpandingCircle } from "./ExpandingCircle";
import { Box, Text, Flex } from "src/theme/primitives";
import { NavWrapper } from "./styles";
import { Button } from "../Button";

interface Props {
  title: React.ReactNode;
  logo: any;
  navItems: { label: React.ReactNode; to: string }[];
  bg: string;
  fg: string;
}

export const ExpandingCircleMenu: React.SFC<Props> = ({
  title,
  logo,
  navItems,
  bg,
  fg,
}) => (
  <MakeMenu>
    {({ open, toggleMenu }) => (
      <ExpandingCircle bg={bg} fg={fg} open={open} toggleMenu={toggleMenu}>
        <NavWrapper
          as="nav"
          open={open}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={1}
        >
          <Flex flexDirection="column">
            <Text
              as="h1"
              color="text.main"
              fontWeight={2}
              textTransform="uppercase"
              fontSize={[5, 6]}
            >
              One
            </Text>
            <Text
              as="h1"
              color="text.main"
              fontWeight={5}
              textTransform="uppercase"
              fontSize={[5, 6]}
            >
              Two
            </Text>
          </Flex>
          <Flex flexDirection="column" mt={2}>
            {navItems.map(x => (
              <Button
                m={1}
                variant="white"
                fontSize={[3, 4]}
                onClick={toggleMenu}
                to={x.to}
              >
                {x.label}
              </Button>
            ))}
          </Flex>
        </NavWrapper>
      </ExpandingCircle>
    )}
  </MakeMenu>
);
