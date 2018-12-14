import * as React from "react";
import { Text } from "src/theme/primitives";

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface Props {
  value: string;
  color: string;
  size: Scale | Scale[];
}

export const Brandname: React.SFC<Props> = ({ value, size, color }) => {
  const [fst, snd] = value.split(" ");
  return (
    <>
      {snd && (
        <Text fontSize={size} fontWeight={2} color={color}>
          {fst}
        </Text>
      )}
      <Text fontSize={size} fontWeight={5} color={color}>
        {snd ? snd : fst}
      </Text>
    </>
  );
};
