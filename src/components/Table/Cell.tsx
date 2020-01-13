import styled from 'styled-components';

type Props = {
  styles: any,
  [propName: string]: any,
}

const Cell = styled.td`
  border-spacing: 0px;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  text-align: left;
  vertical-align: middle;
  padding: 16px;
  &:first-child {
    padding-left: 0;
  }
  width: ${({ styles: { width = 'auto' } = {} }: Props) => (Number(width) ? `${width}px` : width)}
`;

export default Cell;