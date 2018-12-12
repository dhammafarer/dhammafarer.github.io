import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Box } from "src/theme/primitives";

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Box>Index</Box>
    </Layout>
  );
};

export default withIntl(Index);
