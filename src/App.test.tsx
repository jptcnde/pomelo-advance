import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';
import store from './store';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
  });
  const linkElement = getByTestId('app-container');
  expect(linkElement).toBeInTheDocument();
});
