import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

interface CategorySelectProps {
  categorySelected: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategorySelect({
  categorySelected,
  onSelectCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((item) => (
        <Category
          key={item.id}
          {...item}
          checked={item.id === categorySelected}
          onPress={() => onSelectCategory(item.id)}
        />
      ))}
    </ScrollView>
  );
}
