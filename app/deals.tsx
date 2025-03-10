import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { ACCOUNT_TABS } from "@/data/accountTabs";

const DEALS_TABS = [
  {
    id: 3,
    name: "Rewards",
    icon: "stars",
  },
  {
    id: 8,
    name: "Offers",
    icon: "local-offer",
  },
];

const getTabById = (tabs, id) => {
  return tabs.find((tab) => tab.id === id);
};

export default function Deals() {
  const params = useLocalSearchParams();
  const { openTab } = params;
  const accountTab = getTabById(ACCOUNT_TABS, openTab);
  return (
    <View style={styles.dealsWrapper}>
      <View style={{ width: "100%" }}>
        <FlatList
          data={DEALS_TABS}
          renderItem={({ item }) => (
            <DealsTab
              tab={item}
              active={item.id.toString() === openTab.toString()}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          style={styles.dealsTabsList}
          contentContainerStyle={[]}
        />
      </View>
    </View>
  );
}

const DealsTab = ({ tab, active }) => {
  return (
    <View
      style={{ ...styles.dealsTabWrapper, borderBottomWidth: active ? 5 : 0 }}
    >
      <MaterialIcons color={"black"} size={24} name={tab.icon} />
      <Text>{tab.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dealsWrapper: {},
  dealsTabsList: {
    width: "100%",
    backgroundColor: "#FFF",
  },
  dealsTabWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderColor: "#000",
    paddingVertical: 16,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 400,
    flex: 1,
  },
});
