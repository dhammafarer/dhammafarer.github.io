import * as React from "react";
import { Text, Scale } from "themed-primitives";

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
        <Text
          textTransform="uppercase"
          fontSize={size}
          fontWeight={2}
          color={color}
        >
          {fst}
        </Text>
      )}
      <Text
        textTransform="uppercase"
        fontSize={size}
        fontWeight={5}
        color={color}
      >
        {snd ? snd : fst}
      </Text>
    </>
  );
};
