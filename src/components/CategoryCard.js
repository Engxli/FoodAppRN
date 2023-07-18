import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { BASE_URL } from "../apis";

const CategoryCard = ({ name, image, onPress = () => {} }) => {
  console.log(image.includes("media") ? `${BASE_URL}/${image}` : image);
  return (
    <TouchableHighlight
      onPress={() => onPress(name)}
      style={{ flex: 1, width: "100%", height: "100%", borderRadius: 17 }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",

          borderRadius: 17,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: image.includes("media") ? `${BASE_URL}/${image}` : image,
          }}
          width="100%"
          height="100%"
        />
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#00000070",
            zIndex: 1,
          }}
        ></View>
        <Text
          style={{
            color: "white",
            zIndex: 2,
            position: "absolute",
            fontSize: 20,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryCard;
