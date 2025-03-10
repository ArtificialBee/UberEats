import { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Pressable,
} from "react-native";
import SelectModal from "@/components/SelectModal";
import { COUNTRIES } from "@/data/countriesData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import GoogleButton from "@/assets/images/googlebutton.png";

export default function HomeScreen() {
  const [phoneCountry, setPhoneCountry] = useState(COUNTRIES[0]);
  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhone] = useState("");
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const appearAnim = useRef(new Animated.Value(0)).current;
  const expandOverlay = () => {
    Animated.timing(overlayAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(appearAnim, {
      toValue: 1,
      duration: 300,
      // delay: 300,
      useNativeDriver: false,
    }).start();
  };
  return (
    // <SafeAreaView>
    <>
      <SelectModal
        items={COUNTRIES}
        setValue={setPhoneCountry}
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <View style={{ height: "100%" }}>
        <View>
          <Image
            source={require("@/assets/images/landing-image.png")}
            style={styles.landingImage}
          />
        </View>
        <Animated.View
          style={[
            styles.overlay,
            {
              height: overlayAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["40%", "100%"],
              }),
            },
          ]}
        >
          <View style={styles.overlayContent}>
            <Text style={styles.headingText}>
              Use your uber account to get started
            </Text>
            <Text style={styles.subHeadingText}>Enter your mobile number</Text>
            <View style={styles.phoneInput}>
              <Pressable
                onPress={() => setOpenModal(true)}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image source={phoneCountry.flag} style={styles.countryFlag} />
                <Text style={styles.countryCode}>
                  {phoneCountry.countryCode}
                </Text>
                <MaterialIcons
                  color={"black"}
                  size={24}
                  name={"keyboard-arrow-down"}
                />
              </Pressable>
              <TextInput
                style={styles.input}
                placeholder="232 188 7651"
                onFocus={expandOverlay}
                onChangeText={setPhone}
                keyboardType="number-pad"
              />
            </View>
            <Link
              href={{
                pathname: "/phoneverification",
                params: {
                  phone: phone,
                },
              }}
              // href="/phoneverification"
              style={{
                ...styles.nextButton,
                backgroundColor: phone ? "#000" : "rgba(0,0,0,0.5)",
              }}
            >
              NEXT
            </Link>

            <Text style={styles.infoText}>
              By proceeding, you consent to get calls, Whatsapp or SMS messages,
              including by automated means, from uber and its affiliates to the
              number provided.
            </Text>
            <Text style={{ textAlign: "center", width: "100%", marginTop: 10 }}>
              or
            </Text>
            <Image source={GoogleButton} style={{ marginTop: 20 }} />
          </View>
        </Animated.View>
      </View>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  landingImage: {
    width: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  overlayContent: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  overlayText: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  picker: {
    color: "black",
    width: "30%",
    marginRight: "auto",
    padding: 0,
    margin: 0,
  },
  input: {
    // padding: 15,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    margin: 0,
    fontSize: 16,
    width: "70%",
  },
  headingText: {
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 19,
    fontWeight: 500,
  },
  subHeadingText: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 19,
    fontWeight: 500,
  },
  phoneInput: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 24,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E6E6E6",
    width: "100%",
  },
  dropdown: {
    // width:""
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  countryFlag: {
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
  },
  nextButton: {
    width: "100%",
    paddingVertical: 15,
    textAlign: "center",
    color: "#FFF",
    marginTop: 28,
  },
  infoText: {
    color: "#888888",
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 500,
    marginTop: 12,
  },
  googleButton: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 80,
    padding: 15,
  },
});
