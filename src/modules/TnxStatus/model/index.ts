import { createModel } from '@rematch/core';
import effects from './effects';
import reducers from './reducers';
import state from './model';

export default createModel({
  name: 'tnxStatus',
  state,
  effects,
  reducers,
});