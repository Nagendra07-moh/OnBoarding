import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const { height, width } = Dimensions.get("window");
const OnBoardingScreen = () => {
  return (
    <View style={style.Container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  style={style.lottie}
                  source={require("../../assets/Animations/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Introduction",
            subtitle: "Hello World",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  style={style.lottie}
                  source={require("../../assets/Animations/laptop.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  style={style.lottie}
                  source={require("../../assets/Animations/contactUs.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  style={style.lottie}
                  source={require("../../assets/Animations/rating.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: height * 0.4,
  },
});
