import { MaterialIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const WelcomeScreen = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShouldRedirect(true);
    }, 2000);
  }, []);
  if (shouldRedirect) {
    return <Redirect href="/browse" />;
  }
  return (
    <View style={styles.welcomeWrapper}>
      <View style={styles.iconAndTextHeading}>
        <View style={styles.checkIcon}>
          <MaterialIcons color={"#FFF"} size={45} name={"check"} />
        </View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 28,
            marginTop: 25,
          }}
        >
          All set.
        </Text>
      </View>
      <Text style={styles.loginInformation}>
        You’ll be signed into your account in a moment. If nothing happens,
        click continue
      </Text>
      <Link
        href="/browse"
        push
        // href="/phoneverification"

        asChild
      >
        <TouchableOpacity
          style={{
            ...styles.button,
          }}
        >
          <Text style={{ fontSize: 18, lineHeight: 22, fontWeight: 700 }}>
            Continue
          </Text>
          <MaterialIcons
            color={"black"}
            size={24}
            name={"arrow-forward"}
            style={{ alignSelf: "baseline" }}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeWrapper: {
    padding: 20,
    backgroundColor: "#FFF",
    height: "100%",
  },
  iconAndTextHeading: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    alignSelf: "flex-start",
  },
  checkIcon: {
    width: 72,
    height: 72,
    backgroundColor: "#000000",
    borderWidth: 5,
    borderColor: "#276EF1",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInformation: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 20,
    color: "#888888",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#EEEEEE",
    borderRadius: 30,
    paddingTop: 17,
    paddingBottom: 15,
    paddingHorizontal: 22,
    marginTop: 30,
    alignSelf: "flex-start",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
});

export default WelcomeScreen;
