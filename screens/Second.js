import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Second = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>This is Second screen</Text>
      <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({});
