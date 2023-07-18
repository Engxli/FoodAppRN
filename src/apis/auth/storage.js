import * as SecureStore from "expo-secure-store";

const saveToken = async (token) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.log("Error while trying to save token", error);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return token;
  } catch (error) {
    console.log("Error while trying to get the token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
  } catch (error) {
    console.log("Error while trying to delete the token", error);
  }
};

export { saveToken, getToken, removeToken };
