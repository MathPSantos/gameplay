import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { List } from "../../components/List";
import { MemberItem } from "../../components/MemberItem";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "MathPSantos",
      avatar_url: "https://github.com/MathPSantos.png",
      status: "online",
    },
    {
      id: "2",
      username: "amador2014",
      avatar_url: "https://github.com/amador2014.png",
      status: "offline",
    },
    {
      id: "3",
      username: "JosiasCalebe",
      avatar_url: "https://github.com/JosiasCalebe.png",
      status: "offline",
    },
  ];

  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <List
        title="Jogadores"
        subtitle="Total 3"
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MemberItem key={item.id} data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Container>
  );
}
