import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoryList from "../components/CategoryList";
import FilterList from "../components/FilterList";

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleAddCategory = (name) => {
    const isFound = selectedCategories.find((cat) => cat == name);
    if (isFound) {
      setSelectedCategories(selectedCategories.filter((cat) => cat != name));
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const removeFromCatgeory = (name) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat != name));
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.15 }}>
        <CategoryList handleAddCategory={handleAddCategory} />
      </View>

      {selectedCategories.length != 0 ? (
        <>
          <View style={{ flex: 0.08 }}>
            <FilterList
              list={selectedCategories}
              onPress={removeFromCatgeory}
            />
          </View>

          <View style={{ flex: 0.77 }}>
            <Text>RECIPE LIST</Text>
          </View>
        </>
      ) : (
        <View style={{ flex: 0.85 }}>
          <Text>RECIPE LIST</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
