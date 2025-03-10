import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "@/data/users";
import { ACCOUNT_TABS } from "@/data/accountTabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Account() {
  const user = USERS[0];
  return (
    <View style={styles.accountWrapper}>
      <View style={styles.userInfo}>
        <View style={styles.profileImage}>
          <Image
            source={user.image}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.accountItems}>
        <FlatList
          data={ACCOUNT_TABS}
          renderItem={({ item }) => <AccountTabItem item={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<Text>About</Text>}
        />
      </View>
    </View>
  );
}

const AccountTabItem = ({ item }) => {
  if (item.id === 3 || item.id === 8) {
    return (
      <Link
        href={{
          pathname: "/deals",
          params: {
            openTab: item.id,
          },
        }}
        style={{ height: 65 }}
      >
        <View style={styles.accountTabItemWrapper}>
          <MaterialIcons color={"black"} size={32} name={item.icon} />
          <View>
            <Text style={styles.accountTabItemName}>{item.name}</Text>
            {item.specialText && (
              <Text style={styles.accountTabItemSpecialText}>
                {item.specialText}
              </Text>
            )}
          </View>
        </View>
      </Link>
    );
  }
  return (
    <TouchableOpacity>
      <View style={styles.accountTabItemWrapper}>
        <MaterialIcons color={"black"} size={32} name={item.icon} />
        <View>
          <Text style={styles.accountTabItemName}>{item.name}</Text>
          {item.specialText && (
            <Text style={styles.accountTabItemSpecialText}>
              {item.specialText}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Item = ({ item }) => {
  return (
    <View style={styles.accountTabItemWrapper}>
      <MaterialIcons color={"black"} size={32} name={item.icon} />
      <View>
        <Text style={styles.accountTabItemName}>{item.name}</Text>
        {item.specialText && (
          <Text style={styles.accountTabItemSpecialText}>
            {item.specialText}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountWrapper: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: "#FFF",
    height: "100%",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    overflow: "hidden",
  },
  userName: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 400,
    color: "#000",
  },
  accountItems: {
    marginTop: 10,
    paddingBottom: 20,
  },
  accountTabItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    paddingVertical: 15,
    paddingHorizontal: 2,
  },
  accountTabItemSpecialText: {
    color: "#34A853",
  },
  accountTabItemName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
});
