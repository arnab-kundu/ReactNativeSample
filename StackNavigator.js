import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Second from "./screens/Second";
import MyModal from "./screens/MyModal";
import LoginScreen from "./screens/SampleLoginScreen";
import BezierLineChart from "./pages/Charts";
import WeatherApp from "./pages/weather/WeatherApp";
import { TrainStatusApp } from "./pages/networking/TrainStatusApp";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chart" component={BezierLineChart} />
        <Stack.Screen name="WeatherApp" component={WeatherApp} />
        <Stack.Screen name="TrainStatusApp" component={TrainStatusApp} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={MyModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
