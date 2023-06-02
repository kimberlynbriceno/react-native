import React from "react";
import { StyleSheet, View } from "react-native";
import StayledText from "./StyledText.jsx";
import Constants from "expo-constants";
import theme from "../theme.js";
import { Link } from "react-router-native";

const barTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StayledText fontWeight="bold" style={styles.title}>
        {children}
      </StayledText>
    </Link>
  );
};

export default function Appbar() {
  return (
    <View style={styles.container}>
      <barTab active to="/">
        Repositories
      </barTab>
      <barTab active to="/singin">
        singin
      </barTab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Appbar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: theme.Appbar.primaryText,
  },
});
