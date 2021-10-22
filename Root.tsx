import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";

import { theme } from "./src/global/styles/theme";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient style={{ flex: 1 }} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>
  );
}
