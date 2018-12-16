import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Flex, Box, styled, makeTheme } from "themed-primitives";
import { createGlobalStyle } from "styled-components";
import { FormattedMessage } from "react-intl";
import * as m from "./Layout.messages";

import { Normalize } from "styled-normalize";
import { Head } from "./Head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { theme } from "./theme";

const myTheme = makeTheme(theme);

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Content = styled(Flex)`
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(
    30deg,
    ${props => props.theme.colors.black.dark},
    ${props => props.theme.colors.black.light}
  );
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${require("../../images/patterns/noise_pattern_2.jpg")});
    background-repeat: repeat;
    opacity: 0.15;
  }
`;

const Main = styled(Box)`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
`;

interface Data {
  logo: any;
  logoWhite: any;
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const navItems = [
  { to: "/", label: <FormattedMessage {...m.nav.home} /> },
  { to: "/about", label: <FormattedMessage {...m.nav.about} /> },
  { to: "/services", label: <FormattedMessage {...m.nav.services} /> },
  { to: "/contact", label: <FormattedMessage {...m.nav.contact} /> },
];

const phone = <FormattedMessage {...m.contact.phoneNumber} />;
const email = <FormattedMessage {...m.contact.emailAddress} />;

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout2Query {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: { eq: "logos/logo-white.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: Data) => {
      const title = data.site.siteMetadata.title;
      return (
        <ThemeProvider theme={myTheme}>
          <Root>
            <Normalize />
            <GlobalStyle />
            <Head />
            <Content bg="background.default">
              <Header title={title} navItems={navItems} logo={data.logo} />
              <Main>{children}</Main>
              <Footer email={email} phone={phone} title={title} />
            </Content>
          </Root>
        </ThemeProvider>
      );
    }}
  />
);
