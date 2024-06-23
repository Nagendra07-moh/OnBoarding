import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
import LottieView from "lottie-react-native";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/Animations/Home.json")}
          autoPlay
          loop
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Welcome To Home!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: height * 0.4,
  },
  container: {
    flex: 1,
    backgroundColor: "#D5C5A1",
    alignItems: "center",
  },
});
