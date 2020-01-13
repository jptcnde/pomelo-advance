import { createLogger } from 'redux-logger';
import { init, RematchRootState } from '@rematch/core';
import * as models from './models';

const logger = createLogger();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = init({
  models,
});

export type iRootState = RematchRootState<typeof models>

export default store;
