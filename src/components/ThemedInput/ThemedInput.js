import React from "react";
import { TextInput } from "react-native";
import styles from "./style";

const ThemedInput = ({ onChangeText, value, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.loginForm}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default ThemedInput;
