import React from "react";
import { View, Text } from "react-native";

import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  return (
    <Container>
      <Header title="Agendar partida" />
    </Container>
  );
}
