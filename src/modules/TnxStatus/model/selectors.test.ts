import {
  getTnxItem,
  getTnxList,
} from './selectors';
import { ITnxStatus } from './model';

describe('TnxStatus Selectors', () => {
  test('it should return tnxStatusList', () => {
    const tnxStatusList: any = [];
    const testStateData: any = { tnxStatus: { tnxStatusList } };
    const actual = getTnxList(testStateData);

    expect(actual).toEqual(tnxStatusList);
  });

  test('it should return the same length of tnxStatusList', () => {
    const tnxStatusList: any = [1,2,3];
    const testStateData: any = { tnxStatus: { tnxStatusList } };
    const actual = getTnxList(testStateData);

    expect(actual.length).toBe(tnxStatusList.length);
  });

  test('it should return a proper tnxStatusItem', () => {
    const dataItem = {
      amount: 1111,
      currency: 'SGD',
      status: 'REFUNDED',
      providerDisplayName: 'DDD',
      provider: 'ddd',
      initiatorDetails: {
        contactEmail: 'a@a.com'
      },
      created: 'date',
      updated: 'date',
      id: '12345',
    };

    const actual  = getTnxItem((dataItem as ITnxStatus));

    const expected = Object.keys(actual).every(k => [
      'amount',
      'currency',
      'provider',
      'providerDisplayName',
      'status',
      'statusDisplay',
      'initiatorDetails',
      'created',
      'updated',
      'id',
    ].includes);

    expect(expected).toBe(true);
  });
});