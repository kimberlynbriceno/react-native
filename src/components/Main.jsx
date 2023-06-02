import React from "react";
import { View } from "react-native";
import ReposList from "./ReposList.jsx";
import Appbar from "./Appbar.jsx";
import { Route, Switch, Redirect } from "react-router-native";
import StayledText from "./StyledText.jsx";

export default function Main() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <ReposList style={{ flex: 1 }} />
        </Route>
        <Route path="/singin" exact>
          <StayledText>Sing In</StayledText>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
}
