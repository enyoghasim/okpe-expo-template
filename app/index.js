import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const IndexPage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>IndexPage</Text>
        <Link href="/auth/login">
          <Text>Login</Text>
        </Link>
        <Link href="/auth/register">
          <Text>Register</Text>
        </Link>
        <Link href="/dashboard/">
          <Text>Dashboard</Text>
        </Link>
        <Link href="/dashboard/settings">
          <Text>Settings</Text>
        </Link>
        <Link href="/dashboard/wallet">
          <Text>Wallet</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default IndexPage;
