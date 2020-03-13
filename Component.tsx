import React, { PureComponent } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {}

const styles = StyleSheet.create({
  container: {}
});

export default class ComponentTPL extends PureComponent<Props> {
  // static defaultProps = {};

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { style, ...restProps } = this.props;
    return (
      <View {...restProps} style={StyleSheet.compose(styles.container, style)}>
        {restProps.children}
      </View>
    );
  }
}
