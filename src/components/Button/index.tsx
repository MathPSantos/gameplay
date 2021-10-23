import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./style";

interface ButtonProps extends RectButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} activeOpacity={0.9} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
