import {
  setTnxList,
} from './reducers';

describe('TnxStatus Reducer', () => {
  test('it should populate the state with tnxStatusList prop', () => {
    const testStateData: any = {};
    const tnxStatusList: any = [];
    const newState = setTnxList(testStateData, tnxStatusList);

    expect(newState.tnxStatusList).toEqual(tnxStatusList);
  });

  test('it should return the same length of tnxStatusList', () => {
    const testStateData: any = {};
    const tnxStatusList: any = [1,2,3];
    const newState = setTnxList(testStateData, tnxStatusList);

    expect(newState.tnxStatusList.length).toBe(tnxStatusList.length);
  });
});