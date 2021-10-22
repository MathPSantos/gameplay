import React from "react";
import { FlatList, FlatListProps } from "react-native";

import { Divider } from "./Divider";
import { Header } from "./Header";

import { styles } from "./styles";

interface ListProps<T> extends FlatListProps<T> {
  title: string;
  subtitle: string;
}

export function List<T>({ title, subtitle, ...rest }: ListProps<T>) {
  return (
    <>
      <Header title={title} subtitle={subtitle} />

      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider />}
        {...rest}
        style={styles.container}
      />
    </>
  );
}
