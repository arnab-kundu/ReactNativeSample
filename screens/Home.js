import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>This is Home</Text>
      <Button
        onPress={() => navigation.navigate("Second")}
        title="Go to second screen!"
      />
      <Button onPress={() => navigation.navigate("Login")} title="Login" />
      <Button onPress={() => navigation.navigate("Chart")} title="Chart" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
