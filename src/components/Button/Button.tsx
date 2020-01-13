import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  'data-testid': 'pmlo-btn',
  'data-cmp-btn': '',
}))`
  border: 0;
  padding: 0;
  color: white;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  padding: 16px;
  display: inline-block;
  min-width: 136px;
  border-radius: 24px;
  box-shadow: 0 3px 7px 0 rgba(33, 33, 33, 0.1);
  text-align: center;
  background-color: #15cc88;
  outline: 0;
  transition: color .3s ease-in-out, background .3s ease-in-out, opacity .3s ease-in-out;
  &:hover {
    background-color: #209166;
  }

  &:disabled {
    background-color: #757575;
    cursor: auto;
  }
`;

export default Button;
