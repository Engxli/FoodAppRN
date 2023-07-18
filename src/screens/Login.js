import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native";
import ROUTES from "../navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../apis/auth";
import UserContext from "../context/UserContext";
import { saveToken } from "../apis/auth/storage";

const Login = ({ navigation }) => {
  const [userInfo, setuserInfo] = useState({});
  const { setUser } = useContext(UserContext);
  const {
    mutate: loginFunction,
    error,
    isLoading,
  } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: (data) => {
      saveToken(data.token);
      setUser(true);
    },
  });
  return (
    <>
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(value) => {
            setuserInfo({ ...userInfo, username: value });
          }}
        />
        <TextInput
          placeholder="password"
          onChangeText={(value) => {
            setuserInfo({ ...userInfo, password: value });
          }}
        />
        <Button
          title="Login"
          onPress={() => {
            loginFunction();
          }}
        />
        <Button
          title="Not a user?, Register"
          onPress={() => {
            navigation.navigate(ROUTES.AUTHROUTES.REGISTER);
          }}
        />
      </View>
      {isLoading && (
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: "#00000090",
            zIndex: 1,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading...</Text>
        </View>
      )}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
