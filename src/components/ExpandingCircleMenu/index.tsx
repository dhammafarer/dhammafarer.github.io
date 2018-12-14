import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { ExpandingCircle } from "./ExpandingCircle";

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
      <ExpandingCircle
        bg={bg}
        fg={fg}
        open={open}
        toggleMenu={toggleMenu}
        logo={logo}
        navItems={navItems}
        title={title}
      />
    )}
  </MakeMenu>
);
