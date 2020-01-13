import { createModel } from '@rematch/core'
import { ThemeType } from '../../components/Theme/theme';

export const app = createModel({
  state: {
    fetching: false,
    theme: ThemeType.light,
  },
  reducers: {
    setFetching: (state, fetching) => ({
      ...state,
      fetching
    }),
    setTheme: (state, theme) => ({
      ...state,
      theme
    })
  },
})

export default app;