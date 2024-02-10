import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import color from "../../../Database";

export default function LoginScreen() {
  return (
    <View style={styles.parentView}>
      <View style={styles.halfView}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: color.colorLight, fontWeight: "900", fontSize: 28 }}
          >
            HG
          </Text>
          <Text
            style={{
              color: color.colorProLight,
              fontWeight: "200",
              fontSize: 28,
            }}
          >
            {" "}
            LIVE
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Text>Log in</Text>
        </View>
      </View>
    </View>
  );
}
