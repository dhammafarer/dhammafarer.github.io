import * as React from "react";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Box, Text } from "src/theme/primitives";

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Box p={4} bg="grey.900">
        <Text my={5} fontSize={5}>
          Heading
        </Text>
      </Box>
    </Layout>
  );
};

export default withIntl(Index);
