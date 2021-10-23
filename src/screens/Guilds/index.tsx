import React from "react";
import { View, Text, FlatList } from "react-native";

import { Container } from "../../components/Container";
import { Guild, GuildData } from "../../components/Guild";
import { Divider } from "../../components/List/Divider";

import { styles } from "./styles";

interface GuildsProps {
  onSelectGuild: (selectedGuild: GuildData) => void;
}

export function Guilds({ onSelectGuild }: GuildsProps) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "null",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => onSelectGuild(item)} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
