import { useThemeColor } from "@/hooks/use-theme-color";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SmartScript from "./SmartScript";

function HomePage() {
  const theme = useThemeColor({}, "text");
  const [tabs, setTabs] = useState("smart");

  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setTabs("smart")}
          style={styles.tabContainer}
        >
          <Text
            style={[
              styles.tabText,
              { color: tabs === "smart" ? theme : "#888" },
            ]}
          >
            Smart Script
          </Text>
          {tabs === "smart" && (
            <LinearGradient
              colors={["#ADD8E6", "#00008B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ height: 4, width: "100%", borderRadius: 4 }}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTabs("advanced")}
          style={styles.tabContainer}
        >
          <Text
            style={[
              styles.tabText,
              { color: tabs === "advanced" ? theme : "#888" },
            ]}
          >
            Advanced Script
          </Text>
          {tabs === "advanced" && (
            <LinearGradient
              colors={["#ADD8E6", "#00008B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ height: 4, width: "100%", borderRadius: 4 }}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={{ flex: 1 }}>
        {tabs === "smart" && <SmartScript />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 0,
    paddingVertical: 20,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});

export default HomePage;
