import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Home");
  };
  const done = ({ ...props }) => {
    return (
      <TouchableOpacity style={style.doneBtn} {...props}>
        <Text style={{ fontWeight: "500" }}>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.Container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={done}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
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
            title: "Welcome Nagendra!",
            subtitle: "",
          },
          {
            backgroundColor: "#fef3c7",
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
            backgroundColor: "#a78bfa",
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
            backgroundColor: "#899E92",
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
  doneBtn: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: "100%",
    borderBottomLeftRadius: "100%",
  },
});
