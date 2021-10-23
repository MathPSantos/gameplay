import React, { ReactNode } from "react";

import { StatusBar } from "../StatusBar";
import { View, ViewProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient style={{ flex: 1 }} colors={[secondary80, secondary100]}>
      <StatusBar />
      {children}
    </LinearGradient>
  );
}
