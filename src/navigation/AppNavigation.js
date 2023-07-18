import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ROUTES from ".";
import AddRecipe from "../screens/AddRecipe";
import Profile from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator options={{}}>
      <Tab.Screen
        name={ROUTES.APPROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.APPROUTES.ADD_RECIPE}
        component={AddRecipe}
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name={ROUTES.APPROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default AppNavigation;
