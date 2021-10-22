import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

interface AvatarProps {
  imgUrl: string;
}

export function Avatar({ imgUrl }: AvatarProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image source={{ uri: imgUrl }} style={styles.avatar} />
    </LinearGradient>
  );
}
