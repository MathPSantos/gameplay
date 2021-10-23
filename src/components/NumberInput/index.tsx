import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function NumberInput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
}
