import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { ExpandingCircle } from "./ExpandingCircle";

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
      <ExpandingCircle
        open={open}
        toggleMenu={toggleMenu}
        logo={logo}
        navItems={navItems}
        title={title}
      />
    )}
  </MakeMenu>
);
