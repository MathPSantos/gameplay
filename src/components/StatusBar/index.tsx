import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

export function StatusBar() {
  return (
    <ExpoStatusBar style="light" backgroundColor="transparent" translucent />
  );
}
