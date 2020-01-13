import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import '../../../utils/i18n';
import TnxList from './TnxList';
import Theme from '../../../components/Theme/theme';
import store from '../../../store';
import { getTnxItem } from '../model/selectors';
import { ITnxStatus } from '../model/model';

const TEST_ID = 'pmlo-tbl';

const data = [
  {
    "amount": 1500,
    "created": "2019-11-09T00:25:16.128Z",
    "currency": "EUR",
    "history": [
      {
        "status": "INITIATED",
        "trigger": "SYSTEM",
        "updatedDate": "2019-11-09T00:25:16.128Z"
      },
      {
        "status": "QR_CODE_GENERATED",
        "trigger": "SYSTEM",
        "updatedDate": "2019-11-09T00:25:17.805Z"
      },
      {
        "status": "CONFIRMED",
        "trigger": "VENDOR_WEBHOOK",
        "updatedDate": "2019-11-09T00:25:38.995Z"
      },
      {
        "detailsId": "5dc744f21cd3e9f850e20fe1",
        "detailsPath": "remittance-history",
        "status": "REMITTED",
        "trigger": "SYSTEM",
        "updatedDate": "2019-11-09T23:00:02.855Z"
      }
    ],
    "id": "5dc6076c43cbaf5e64e33662",
    "initiatorDetails": {
      "contactEmail": "John.Doe@pomelopay.com",
      "contactName": "John Doe",
      "firstName": "John",
      "id": "165015cb-882a-403d-9554-481c230cec0f",
      "lastName": "Doe"
    },
    "provider": "bcmc",
    "providerDisplayName": "bcmc",
    "status": "CONFIRMED",
    "updated": "2019-11-09T00:25:16.128Z"
  },
  {
    "amount": 1500,
    "created": "2019-11-09T00:29:21.316Z",
    "currency": "EUR",
    "history": [
      {
        "status": "INITIATED",
        "trigger": "SYSTEM",
        "updatedDate": "2019-11-09T00:29:21.316Z"
      },
      {
        "status": "QR_CODE_GENERATED",
        "trigger": "SYSTEM",
        "updatedDate": "2019-11-09T00:29:22.744Z"
      },
      {
        "status": "CANCELLED",
        "trigger": null,
        "updatedDate": "2019-11-10T00:29:26.380Z"
      }
    ],
    "id": "5dc6086143cbaf14ace33663",
    "initiatorDetails": {
      "contactEmail": "Simon.Doe@pomelopay.com",
      "contactName": "Simon Doe",
      "firstName": "Simon",
      "id": "165015cb-882a-403d-9554-481c230cec0f",
      "lastName": "Doe"
    },
    "provider": "card",
    "providerDisplayName": "card",
    "status": "CANCELLED",
    "updated": "2019-11-09T00:29:21.316Z"
  }
]

const defaultProps = {
  items: [],
};

function Wrapper({ children }: any) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>

    </StoreProvider>
  )
}


describe('Tnx Status List', () => {
  test('it should render the list', () => {
      const { getByTestId } = render(<TnxList {...defaultProps} />, {
        wrapper: Wrapper,
      });
    expect(getByTestId(TEST_ID)).toBeInTheDocument();

  });

  test('it should display correct lenght of record', () => {

    const newData: Array<ITnxStatus> = ((data as any).map(getTnxItem))
    const { getByTestId } = render(<TnxList {...defaultProps}  items={newData} />, {
      wrapper: Wrapper,
    });
    const node = getByTestId(TEST_ID);
    expect(node.querySelectorAll('tbody tr').length).toBe(2);
  });

  test('it should display proper columns', () => {

    const newData: Array<ITnxStatus> = ((data as any).map(getTnxItem))
    const { getByTestId } = render(<TnxList {...defaultProps}  items={newData} />, {
      wrapper: Wrapper,
    });
    const node = getByTestId(TEST_ID);
    expect(node.querySelectorAll('thead tr th').length).toBe(6);
  });
});
