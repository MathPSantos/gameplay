import React, { ReactNode } from "react";
import { View, Text, Modal, ModalProps } from "react-native";
import { Container } from "../Container";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Container>
            <View style={styles.bar} />
            {children}
          </Container>
        </View>
      </View>
    </Modal>
  );
}
