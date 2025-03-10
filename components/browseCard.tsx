import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function BrowseCard({ image, title }) {
  return (
    <View style={styles.browseCardWrapper}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  browseCardWrapper: {
    width: 170,
    height: 130,
    // backgroundColor: "red",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleWrapper: {
    marginTop: "auto",
    width: "100%",
    backgroundColor: "#FFF",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 20,
  },
});
