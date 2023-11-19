import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

export default function StackNavigationApp() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
