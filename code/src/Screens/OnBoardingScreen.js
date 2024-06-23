import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

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
                <Text>Hello World</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Second</Text>
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Third</Text>
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
});
