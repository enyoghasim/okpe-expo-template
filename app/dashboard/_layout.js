import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const DashboardLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="wallet" />
    </Tabs>
  );
};

export default DashboardLayout;
