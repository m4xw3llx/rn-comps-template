import { AnyAction } from "redux";
import { EffectsCommandMap } from "dva";

export interface XXXState {}

const initialState: XXXState = {};

export default {
  namespace: "NAMESPACE",
  state: initialState,
  reducers: {
    todo(state: XXXState, { payload }: AnyAction) {
      // TODO
    }
  },
  effects: {
    *todo({ payload }: AnyAction, { call, put }: EffectsCommandMap) {
      // TODO
      yield call();
    }
  }
};
