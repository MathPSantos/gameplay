import React, { ReactNode } from "react";

import { StatusBar } from "../StatusBar";
import { View, ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  children: ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <View style={{ flex: 1 }} {...rest}>
      <StatusBar />
      {children}
    </View>
  );
}
