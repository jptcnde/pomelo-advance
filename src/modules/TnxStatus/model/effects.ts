import * as api from '../../../api';

// in real world app, dispatch needs to have its on Type or
export default (dispatch: any) => ({
  async configure() {
    try {
      dispatch.app.setFetching(true);

      const tnxStatusList = await api.getTnx();
      dispatch.tnxStatus.setTnxList(tnxStatusList);

    } catch (e) {
      console.log(e.message)
    } finally {
      dispatch.app.setFetching(false);
    }
  },
  async refundTnx(id: string) {
    try {
      dispatch.app.setFetching(true);
      // put a small delay as the service is too fast
      await new Promise(r => window.setTimeout(r, 500))
      await api.refundTnx(id);
      const tnxStatusList = await api.getTnx();
      dispatch.tnxStatus.setTnxList(tnxStatusList);
    } catch (e) {
      console.log(e.message)
    } finally {
      dispatch.app.setFetching(false);
    }
  }
});