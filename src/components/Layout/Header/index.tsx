import * as React from "react";
import { ExpandingCircleMenu } from "../../ExpandingCircleMenu";
import { styled } from "src/theme";
import { Link } from "../../../i18n";
import { Flex, Text } from "src/theme/primitives";

const Trigger = styled.div`
  display: block;
`;

export const Wrapper = styled(Flex)`
  z-index: ${props => props.theme.zIndexes[5]};
`;

export const Brand = styled(Flex)`
  cursor: pointer;
`;

export const LogoWrapper = styled(Flex)`
  width: ${props => props.theme.dimensions[2]};
`;

export const Logo = styled.img`
  width: 100%;
`;
export const BrandName = styled(Text)`
  display: none;
  ${props => props.theme.devices[1]} {
    display: block;
  }
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
      <Brand alignItems="center">
        <BrandName color="primary.main" fontSize={3} ml={3}>
          {title}
        </BrandName>
      </Brand>
    </Link>
    <Flex>
      <Trigger>
        <ExpandingCircleMenu
          bg="primary.main"
          fg="white.main"
          title={title}
          navItems={navItems}
          logo={logo}
        />
      </Trigger>
    </Flex>
  </Wrapper>
);
