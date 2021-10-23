import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

interface CategorySelectProps {
  categorySelected: string;
  onSelectCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({
  categorySelected,
  onSelectCategory,
  hasCheckBox = false,
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
          title={item.title}
          icon={item.icon}
          checked={item.id === categorySelected}
          onPress={() => onSelectCategory(item.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
