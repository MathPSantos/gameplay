import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { Container } from "../../components/Container";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { NumberInput } from "../../components/NumberInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { GuildData } from "../../components/Guild";
import { Guilds } from "../Guilds";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [isGuildsModalOpen, setIsGuildsModalOpen] = useState(false);
  const [guild, setGuild] = useState<GuildData>({} as GuildData);

  function handleCategorySelect(categoryId: string) {
    const currentId = categoryId === category ? "" : categoryId;

    setCategory(currentId);
  }

  function toggleIsGuildsModalOpen() {
    setIsGuildsModalOpen(!isGuildsModalOpen);
  }

  function handleSelectedGuild(selectedGuild: GuildData) {
    setGuild(selectedGuild);
    toggleIsGuildsModalOpen();
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Container>
        <Header title="Agendar partida" />

        <ScrollView>
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            onSelectCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={toggleIsGuildsModalOpen}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectContent}>
                  <Text style={styles.label}>
                    {guild.name || "Selecione o servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.fields}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>

                <View style={styles.column}>
                  <NumberInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <NumberInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>

                <View style={styles.column}>
                  <NumberInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <NumberInput maxLength={2} />
                </View>
              </View>
            </View>

            <View>
              <View style={[styles.fields, { marginBottom: 8 }]}>
                <Text style={styles.label}>Descrição</Text>

                <Text style={styles.caractereLimit}>Max 100 caracteres</Text>
              </View>

              <Textarea maxLength={100} numberOfLines={5} autoCorrect={false} />
            </View>

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>

        <ModalView visible={isGuildsModalOpen}>
          <Guilds onSelectGuild={handleSelectedGuild} />
        </ModalView>
      </Container>
    </KeyboardAvoidingView>
  );
}
