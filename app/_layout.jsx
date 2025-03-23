import React from "react";
import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const MainLayout = () => {
  return (
    <Stack>
      {/* Home screen */}
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="signIn"
        options={{
          title: "Sign In",
        }}
      />
    </Stack>
  );
};

export default MainLayout;
