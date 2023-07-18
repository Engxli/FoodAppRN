import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { register } from "../apis/auth";
import { saveToken } from "../apis/auth/storage";

const Register = () => {
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const { mutate: registerFunction, error } = useMutation({
    mutationFn: () => register({ ...userInfo, image }),
    onSuccess: (data) => {
      saveToken(data.token);
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        height: 500,
        justifyContent: "center",
      }}
    >
      <Pressable onPress={pickImage}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "gray",
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </View>
      </Pressable>

      <TextInput
        placeholder="username"
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, username: value });
        }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(value) => {
          setUserInfo({ ...userInfo, password: value });
        }}
      />

      <Button
        title="Register"
        onPress={() => {
          registerFunction();
        }}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
