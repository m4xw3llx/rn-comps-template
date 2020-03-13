import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {}
});

export default class ComponentTPL extends PureComponent {
  // static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { style, ...restProps } = this.props;
    return (
      <View {...restProps} style={StyleSheet.compose(styles.container, style)}>
        {restProps.children}
      </View>
    );
  }
}
