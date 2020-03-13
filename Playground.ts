/* eslint-disable */
import { Component } from "react";
import { connect } from "react-redux";

@connect()
class Test extends Component {
  static aaa = 1;
  // bbb = 2;
  // ccc() {

  // }
}

class Test1 extends Component {
  static aaa = 1;
  bbb = 2;
  ccc() {}
}

const ConnectedTest1 = connect()(Test1);

let xxx: typeof Test1 = ConnectedTest1;

class Test2 extends Component {}

@connect()
class Test3 extends Test1 {
  static aaa = 1;
  bbb = 2;
  ccc() {}
}
