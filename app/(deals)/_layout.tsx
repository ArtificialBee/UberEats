import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DealsLayout() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
