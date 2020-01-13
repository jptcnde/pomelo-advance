import 'styled-components'
import { ITheme } from '../components/Theme/theme';

declare module 'MyTypes' {
  import { StateType, ActionType } from "typesafe-actions";
  // 1 for store, 1 for reducer, 1 for action creators
  export type Store = StateType<typeof import("../store").default>;
}


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
  }
}