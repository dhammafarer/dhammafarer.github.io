import * as React from "react";
import { ExpandingCircleMenu } from "../../ExpandingCircleMenu";
import { Link } from "../../../i18n";
import { Flex, Card, styled } from "themed-primitives";
import { Brandname } from "../../Brandname";
import { Logo } from "../../Logo";

export const Wrapper = styled(Flex)`
  z-index: ${props => props.theme.zIndexes[5]};
`;

export const Brand = styled(Flex)`
  cursor: pointer;
`;

export const LogoWrapper = styled(Flex)`
  width: ${props => props.theme.dimensions[2]};
`;

interface HeaderProps {
  logo?: any;
  title: string;
  navItems: { to: string; label: React.ReactNode }[];
}

export const Header: React.SFC<HeaderProps> = ({ logo, title, navItems }) => (
  <Wrapper
    bg="transparent"
    p={3}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Link to="/">
      <Brand alignItems="center" color="secondary.main">
        <Card
          bg="secondary.main"
          color="black.light"
          radius={2}
          p={1}
          style={{ display: "inline-block" }}
        >
          <Logo size={36} strokeWidth={4} />
        </Card>
        <Flex ml={2}>
          <Brandname color="inherit" size={6} value={title} />
        </Flex>
      </Brand>
    </Link>
    <Flex>
      <ExpandingCircleMenu
        bg="secondary.main"
        fg="white.main"
        title={title}
        navItems={navItems}
        logo={logo}
      />
    </Flex>
  </Wrapper>
);
