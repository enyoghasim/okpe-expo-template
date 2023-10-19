import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    />
  );
};

export default AppLayout;
