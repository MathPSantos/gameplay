import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <SafeAreaProvider>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.secondary100 },
        }}
      >
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Screen name="AppointmentCreate" component={AppointmentCreate} />
      </Navigator>
    </SafeAreaProvider>
  );
}
