// this can be decoupled for big projects

export enum TypograpyVariantsEnum {
  body1 = 'body1',
  caption = 'caption',
  headline = 'headline',
}

export enum ThemeType {
  light = 'light',
  dark = 'dark'
}

export interface ITextPalette {
  primary: string;
  secondary: string;
  hint?: string;
}

export interface IBackgroundPalette {
  paper: string,
  default: string,
  [propName: string]: string,
}

export interface IPalette {
  common: {
    white: string,
    black: string,
  },
  primary: string;
  secondary: string;
  divider: string;
  text: ITextPalette;
  background: IBackgroundPalette,
}



export interface ITypography {
  fontSize: string | number
}

export interface ITheme {
  palette: IPalette;
  type?: ThemeType;
  typography: {
    body1: ITypography,
    headline: ITypography,
    caption: ITypography,
  },
  [propName: string]: any;
}


const typography = {
  body1: {
    fontSize: '1rem',
  },
  headline: {
    fontSize: '1.3rem',
  },
  caption: {
    fontSize: '.9rem',
  },
};
// minimal theme, only includes whats needed based on current task
const Theme: ITheme = {
  type: ThemeType.light,
  palette: {
    primary: 'blue',
    secondary: 'white',
    divider: 'rgba(0, 0, 0, 0.12)',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)'
    },
    background: {
      paper: '#fff',
      default: '#fff'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
  },
  typography,
};

export const darkTheme: ITheme = {
  type: ThemeType.dark,
  palette: {
    primary: 'blue',
    secondary: 'white',
    divider: 'rgba(0, 0, 0, 0.12)',
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      paper: '#424242',
      default: '#121212'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
  },
  typography,
}

export default Theme;
