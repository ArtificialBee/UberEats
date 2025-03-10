import {
  Animated,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PhoneVerification() {
  const params = useLocalSearchParams();
  const { phone } = params;

  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const navigation = useNavigation();

  const handleInputChange = (text, index, nextInputRef) => {
    const updatedOtp = [...verificationCode];
    updatedOtp[index] = text;
    setVerificationCode(updatedOtp);

    if (text.length === 1 && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const handleResendCode = () => {
    setCountdown(30);
    setIsDisabled(true);
  };

  useEffect(() => {
    let timer;
    if (isDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      if (countdown === 0) {
        setIsDisabled(false);
      }
    }
    return () => clearInterval(timer);
  }, [countdown, isDisabled]);

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.heading}>
          Enter the 4-digit code sent to you at {phone}
        </Text>
        <View style={styles.inputsContainer}>
          <View style={{ ...styles.inputContainer, borderColor: "#000" }}>
            <TextInput
              style={styles.input}
              ref={inputRef1}
              autoFocus
              onChangeText={(text) => handleInputChange(text, 0, inputRef2)}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              ref={inputRef2}
              onChangeText={(text) => handleInputChange(text, 1, inputRef3)}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              ref={inputRef3}
              onChangeText={(text) => handleInputChange(text, 2, inputRef4)}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={{ ...styles.input }}
              ref={inputRef4}
              onChangeText={(text) => handleInputChange(text, 3, null)}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleResendCode}
          disabled={isDisabled}
        >
          <Text
            style={[
              styles.buttonText,
              ,
              isDisabled ? styles.buttonTextDisabled : null,
            ]}
          >
            {`I haven't received the code ${
              countdown > 0 ? "(" + countdown + "s)" : ""
            }`}
          </Text>
        </TouchableOpacity>
        <Link
          disabled
          href={{
            pathname: "/passwordverification",
            params: {
              phone: phone,
            },
          }}
          // href="/phoneverification"
          style={{
            ...styles.button,
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Log in with password
        </Link>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons color={"black"} size={24} name={"arrow-back"} />
        </TouchableOpacity>
        <Link
          href="/welcome"
          // href="/phoneverification"
          style={{
            ...styles.button,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            alignSelf: "stretch",
          }}
          asChild
        >
          <Pressable disabled={verificationCode.some((item) => item === "")}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: verificationCode.some((item) => item === "")
                  ? "#7F7F7F"
                  : "#000",
              }}
            >
              Next
            </Text>
            <MaterialIcons
              color={
                verificationCode.some((item) => item === "")
                  ? "#7F7F7F"
                  : "#000"
              }
              size={24}
              name={"arrow-forward"}
              style={{ alignSelf: "baseline" }}
            />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignSelf: "flex-start",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  heading: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 28,
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    gap: 12,
  },
  inputContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#EEEEEE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  input: {},
  button: {
    backgroundColor: "#EEEEEE",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 30,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
  },
  buttonTextDisabled: {
    color: "#7F7F7F",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
