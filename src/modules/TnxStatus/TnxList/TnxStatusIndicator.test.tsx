import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import '../../../utils/i18n';
import TnxStatusIndicator, { Props } from './TnxStatusIndicator';
import Theme from '../../../components/Theme/theme';
import store from '../../../store';
import { getTnxItem } from '../model/selectors';
import { ITnxStatus } from '../model/model';
import { STATUSES, STATUSES_DISPLAY, STATUS_COLORS } from '../../../constants';

const TEST_ID = 'pmlo-tnxstatus-indicator';

const defaultProps: Props = {
  status: STATUSES.INITIATED,
  statusDisplay: STATUSES_DISPLAY[STATUSES.INITIATED]
};

// this could be a common helper
function Wrapper({ children }: any) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>

    </StoreProvider>
  )
}


describe('Tnx Status Status Indicator', () => {
  test('it should render the list', () => {
      const { getByTestId } = render(<TnxStatusIndicator {...defaultProps} />, {
        wrapper: Wrapper,
      });
    expect(getByTestId(TEST_ID)).toBeInTheDocument();

  });

  test('it should display status label by status value', () => {
    const { getByText } = render(<TnxStatusIndicator statusDisplay={STATUSES_DISPLAY[STATUSES.REFUNDED]} status={STATUSES.REFUNDED} />, {
      wrapper: Wrapper,
    });
    const node = getByText('Refunded');
    expect(!!node).toBe(true);
  });

  test('it should render status color', () => {
    const { getByTestId } = render(<TnxStatusIndicator {...defaultProps} />, {
      wrapper: Wrapper,
    });
    const node = getByTestId(TEST_ID);
    const actual = node.querySelector('[data-cmp-typography="caption"]')?.getAttribute('color');
    const expected = STATUS_COLORS[STATUSES.INITIATED];
    expect(actual).toBe(expected);
  });
});
