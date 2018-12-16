import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { ExpandingCircle } from "./ExpandingCircle";
import { Flex } from "themed-primitives";
import { NavWrapper } from "./styles";
import { Button } from "../Button";
import { Brandname } from "../Brandname";

interface Props {
  title: string;
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
            <Brandname value={title} size={6} color="text.main" />
          </Flex>
          <Flex flexDirection="column" mt={2}>
            {navItems.map(x => (
              <Button
                key={x.to}
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
