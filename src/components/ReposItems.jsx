import react from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "./../theme";

const RespositoryDescription = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          width: 150,
        }}
      >
        <StyledText fontWeight="bold" color="secondary">
          Description:
        </StyledText>

        <StyledText> {props.description}</StyledText>
      </View>
      <View style={{ width: 150 }}>
        <StyledText fontWeight="bold" color="secondary">
          url:
        </StyledText>

        <StyledText> {props.url}</StyledText>
      </View>
    </View>
  );
};
const ItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", padding: 5 }}>
      <Image style={styles.image} source={{ uri: props.img }} />
      <View style={{ padding: 10 }}>
        <StyledText fontWeight="bold" fontSize="subheading">
          {" "}
          {props.id}
        </StyledText>
        <StyledText style={styles.language}> {props.name}</StyledText>
      </View>
    </View>
  );
};

export default function ReposItems(props) {
  return (
    <View key={props.id} style={styles.container}>
      <ItemHeader {...props} />
      <RespositoryDescription {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBotton: 5,
    paddingTop: 5,
    backgroundColor: "#f3f3f3",
    marginLeft: 10,
    marginRight: 10,
  },
  language: {
    backgroundColor: "#90E6BC",
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    alignSelf: "flex-start",
    padding: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
