import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  big: {
    fontSize: theme.fontSizes.subHeading,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
});
export default function StayledText({
  children,
  color,
  fontWeight,
  fontSize,
  style,
  ...restOfProps
}) {
  const textStayles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.big,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStayles} {...restOfProps}>
      {children}
    </Text>
  );
}
