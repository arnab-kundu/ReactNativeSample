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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
