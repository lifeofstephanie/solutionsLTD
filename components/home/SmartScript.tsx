import { image } from "@/data/image";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function SmartScript() {
  const [active, setActive] = useState("");
  const theme = useThemeColor({}, "text");
  const background = useThemeColor({}, "button");
  const color = useThemeColor({}, "buttonColor");
  const bg = useThemeColor({}, "background");

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
    >
      {/* Heading */}
      <Text style={[styles.text, { color: theme }]}>
        What type of posters do you want to create?
      </Text>

      {/* Poster Options */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        {image.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 90,
              height: 150,
              backgroundColor: item.color,
              borderRadius: 8,
              borderWidth: active === item.name ? 2 : 0,
              borderColor: active === item.name ?theme : "transparent",
            }}
            onPress={() => setActive(item.name)}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                marginTop: 5,
                marginHorizontal: 5,
                fontWeight: "500",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Text area with icon */}
      <View
        style={{
          height: 200,
          alignItems: "flex-end",
          flexDirection: "row",
          gap: 10,
          backgroundColor: bg,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            height: 180,
            color: theme,
            width: "90%",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          multiline
          numberOfLines={4}
          placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting"
          textAlignVertical="top"
          placeholderTextColor="#888"
        />
        <Ionicons name="image-outline" style={{ color: theme }} size={24} />
      </View>

      {/* Settings */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "#888", fontSize: 18 }}>Settings</Text>
        <View style={{ marginTop:10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: bg,
              height: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text style={{ color: theme, fontSize: 16 }}>Size</Text>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Text style={{ color: theme, fontSize: 16 }}>1080 x 1920 px</Text>
              <Ionicons name="chevron-forward" size={20} style={{ color: theme }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: bg,
              height: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              borderTopColor: "#888",
              borderTopWidth: 1,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Text style={{ color: theme, fontSize: 16 }}>Category</Text>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Text style={{ color: theme, fontSize: 16 }}>Food and beverage</Text>
              <Ionicons name="chevron-forward" size={20} style={{ color: theme }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Generate Button */}
      <TouchableOpacity
        style={{
          backgroundColor: background,
          height: 60,
          marginVertical: 20,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginBottom:50
        }}
      >
        <Ionicons name="add-circle" size={30} style={{ color: color }} />
        <Text style={{ color: color, fontSize: 20 }}>Generate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default SmartScript;
