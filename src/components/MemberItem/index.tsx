import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

type MemberItemData = {
  username: string;
  avatar_url: string;
  status: string;
};

interface MemberItemProps {
  data: MemberItemData;
}

export function MemberItem({ data }: MemberItemProps) {
  const { primary, on } = theme.colors;
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar imgUrl={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.statusBullet,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />

          <Text style={styles.statusLabel}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
