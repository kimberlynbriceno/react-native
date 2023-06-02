import React from "react";
import { Text, FlatList } from "react-native";
import repositories from "../data/resositorys.js";
import ReposItems from "./ReposItems.jsx";

export default function ReposList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <ReposItems {...repo} />}
    />
  );
}
