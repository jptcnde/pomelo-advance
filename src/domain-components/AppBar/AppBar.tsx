import React, { useState } from 'react';
import styled from 'styled-components';
import BaseIconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { useTranslation } from "react-i18next";
import { getAppTheme } from '../../store/selectors/app';
import BaseSelect from '../../components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeType } from '../../components/Theme/theme';


const Container = styled.header`
  padding: 24px 0;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

const IconButton = styled(BaseIconButton)`
  bottom: 4px;
  position: relative;
`;

const Menu = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const Select = styled(BaseSelect)`
  border: none;
  position: relative;
  box-shadow: none;
  z-index: 1;
  outline: none;
  appearance: none;
  text-align: left;
  width: 100px;
  border-radius: 0;
  height: 40px;
  line-height: 110%;
  transition: all 300ms ease-in-out;
  background-color: transparent;
  border-bottom: 1px solid #bbc3c9;
  padding-left: 3px;
  padding-right: 22px;
  font-size: 1.09em;

  &.invalid, &.invalid:focus {
    border-bottom: 1px solid #ff0000;
  }
`;

const STYLE_ID: string = 'demo-style-override';

function AppBar() {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();
  const theme = useSelector(getAppTheme);
  const { app: { setTheme } } = useDispatch();

  function applyStyleOverride() {
    const node = document.getElementById(STYLE_ID);

    if (node) {
      node.parentElement?.removeChild(node);
      return;
    }

    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.innerHTML = `
      button[data-cmp-btn] {
        background-color: red;
      }

      p[data-cmp-typography="headline"] {
        color: green;
      }
    `;

    document.head.appendChild(el);
  }

  function handleLangChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = e;
    setLang(value);
    i18n.changeLanguage(value);
  }

  function handleThemeChange() {
    setTheme(theme === ThemeType.dark ? ThemeType.light : ThemeType.dark);
  }

  return (
    <Container>
      <LogoWrapper>
        <a href="https://www.pomelopay.com">
          <img src="https://www.pomelopay.com/wp-content/uploads/2019/11/pp-app-icon.svg" alt="PomeloPay" />
        </a>
      </LogoWrapper>

      <Menu>
        <Select
          onChange={handleLangChange}
          value={lang}>
          <option value="en">
            English
          </option>
          <option value="de">
            Spanish
          </option>
        </Select>
        &nbsp;&nbsp;&nbsp;
        <IconButton onClick={handleThemeChange}>
          <Brightness5Icon style={{ color: theme !== ThemeType.dark ? 'rgba(0, 0, 0, 0.54)' : '#fff' }} />
        </IconButton>

        <IconButton onClick={applyStyleOverride}>
          <SettingsIcon
            style={{ color: theme !== ThemeType.dark ? 'rgba(0, 0, 0, 0.54)' : '#fff' }}
          />
        </IconButton>
      </Menu>
    </Container>
  );
}

export default AppBar;