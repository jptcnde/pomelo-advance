import { IState } from './model';

export function setTnxList(state: IState, tnxStatusList: []): IState {
  return {
    ...state,
    tnxStatusList
  };
};

export default {
  setTnxList,
};