import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';

import Typography from '../../../components/Typography';
import { STATUS_COLORS } from '../../../constants';

type StatusIndicatorProps = {
  bgcolor: string
}

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ bgcolor }: StatusIndicatorProps) => bgcolor };
  display: inline-block;
  content: ' ';
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export type Props = {
  status: string,
  statusDisplay: string,
}

function TransactionStatus(props: Props) {
  const { status, statusDisplay } = props;
  return (
    <Container data-testid="pmlo-tnxstatus-indicator">
      <StatusIndicator bgcolor={STATUS_COLORS[status]} />
      &nbsp;
      &nbsp;
      <Typography
        color={STATUS_COLORS[status]}
        variant="caption">
        <Trans i18nKey={statusDisplay} />
      </Typography>
    </Container>
  );
}

export default TransactionStatus;