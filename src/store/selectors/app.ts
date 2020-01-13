import { RematchRootState } from "@rematch/core";

export const getAppFetching =
  (state: RematchRootState<any>) => state.app.fetching;

  export const getAppTheme =
  (state: RematchRootState<any>) => state.app.theme;
