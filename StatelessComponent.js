import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {}
});

function FunctionComponent({ style, ...restProps }) {
  return (
    <View {...restProps} style={StyleSheet.compose(styles.container, style)}>
      {restProps.children}
    </View>
  );
}

export default React.memo(FunctionComponent);
