import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png";

  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
