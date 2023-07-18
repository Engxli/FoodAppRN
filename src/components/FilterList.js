import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";

const FilterList = ({ list = ["Test", "Test 2"], onPress = () => {} }) => {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 5, height: "100%", gap: 5 }}
      horizontal
    >
      {list.map((item, index) => (
        <TouchableHighlight
          onPress={() => {
            onPress(item);
          }}
          key={index}
          style={{
            minWidth: 70,
            height: "100%",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000070",
            borderRadius: 17,
            flexDirection: "row",
          }}
        >
          <>
            <Text>{item}</Text>

            <Text style={{ marginLeft: 5 }}>X</Text>
          </>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

export default FilterList;

const styles = StyleSheet.create({});
