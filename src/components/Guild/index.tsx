import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildData = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

interface GuildProps extends TouchableOpacityProps {
  data: GuildData;
}

export function Guild({ data, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>

        <Feather name="chevron-right" size={24} color={theme.colors.heading} />
      </View>
    </TouchableOpacity>
  );
}
