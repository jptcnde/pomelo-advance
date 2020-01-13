import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
  [propName: string]: any,
};

const SelectWrapper = styled.select`
  background-image: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAIBAMAAAA/ygPCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAABdZ25dZ25dZ25dZ25dZ25dZ25dZ25dZ25dZ25dZ24AAADaHLy8AAAACnRSTlMAZogzVZnuIhHMCbsUzQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA3SURBVAjXY2AUYGBgMmDwWsjAEJXO0LlKgHVVAAPHrIVRSxkYgFwgh4GBPWslAwiYzQBTHEAMAEnXCpEPACM2AAAAAElFTkSuQmCC) !important;
  background-repeat: no-repeat;
  appearance: none;
  background-position: 98%;
  &:focus {
    background-position: 98%;
  }

  &::-ms-expand {
    display: none
  }
  color: ${({ theme }) => theme.palette.text.primary };
`;

const Select = (props: Props) =>
(<SelectWrapper {...props}>
  {props.children}
</SelectWrapper>);

export default Select;