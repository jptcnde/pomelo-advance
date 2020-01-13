import { init } from '@rematch/core'
import model from './index';
import appModel from '../../../store/models/app';

describe('Tnx Status Effects', () => {
  test('should get tnx status list', async () => {
    const store = init({
        models: { tnxStatus: model, app: appModel },
    })
    await store.dispatch.tnxStatus.configure();

    const tnxList = store.getState().tnxStatus.tnxStatusList;
    expect(tnxList).not.toBe(0);

  });

  test('should refund tnx and done processing', async () => {
    const store = init({
      models: { tnxStatus: model, app: appModel },
    });

    await store.dispatch.tnxStatus.refundTnx('testid');

    const fetching = store.getState().app.fetching;

    expect(fetching).toBe(false);
  })
})