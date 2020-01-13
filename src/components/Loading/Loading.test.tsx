
import * as React from "react";
import { render } from '@testing-library/react';
import Loading from './Loading';
import loadingUrl from './loading.svg';

describe('Loading Component', () => {
  test('it should render Loading element', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });

  test('it should have loading src url', () => {
    const { container } = render(<Loading />);

    const expected = loadingUrl;
    const node = container.querySelector('img') || { getAttribute: () => {}};
    const actual = node.getAttribute('src');

    expect(actual).toBe(expected);
  });
});
