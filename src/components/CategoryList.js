import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../apis/categroy";

const CategoryList = ({ handleAddCategory }) => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  if (categories?.length == 0)
    return (
      <ScrollView horizontal contentContainerStyle={{ padding: 5, gap: 5 }}>
        <View style={{ width: 150 }}>
          <CategoryCard
            name="Empty"
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsbbfdOYmsxB3yf6a1YbC8auRHG7o9Ta4xw&usqp=CAU"
            }
          />
        </View>
      </ScrollView>
    );
  return (
    <ScrollView horizontal contentContainerStyle={{ padding: 5, gap: 5 }}>
      {categories?.map((category) => (
        <View style={{ width: 150 }} key={category._id}>
          <CategoryCard
            name={category.name}
            image={category.image}
            onPress={handleAddCategory}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
