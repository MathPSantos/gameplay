import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./style";

interface ButtonIconProps extends RectButtonProps {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} activeOpacity={0.9} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
