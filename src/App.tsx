import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import TnxStatus from './modules/TnxStatus';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';
import { getAppFetching, getAppTheme } from './store/selectors/app';
import { darkTheme, lightTheme } from './components/Theme';
import i18n from './utils/i18n';
import { ThemeType } from './components/Theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default };
    color: ${({ theme }) => theme.palette.text.primary };
  }

  option {
    color: inherit;
  }
`;

function App() {
  const [,forceUpdate] = useState();
  const themeType = useSelector(getAppTheme);

  useEffect(() => {
    i18n.on('languageChanged', forceUpdate);
    return () => {
      i18n.off('languageChanged', forceUpdate);
    }
  }, [])

  const fetching = useSelector(getAppFetching);

  const theme = themeType === ThemeType.dark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <TnxStatus />
        {fetching && <Loading />}
      </>
    </ThemeProvider>
  );
}

export default App;
