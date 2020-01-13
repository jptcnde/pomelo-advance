import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../domain-components/AppBar';
import AppFooter from '../../domain-components/AppFooter';
import Container from '../../components/Container';
import TnxList from './TnxList';
import Typography from '../../components/Typography';
import styled from 'styled-components';
import { getTnxList } from './model/selectors';
import { Trans } from 'react-i18next';

const Main = styled.main`
  margin-top: 16px;
`;

function TnxStatus() {
  const {
    tnxStatus: {
      configure,
    }
  } = useDispatch();
  const tnxList = useSelector(getTnxList);

  useEffect(() => {
    configure();
  }, [configure]);

  return (
    <Container data-testid="app-container">
      <AppBar />
      <Main>
        <Typography variant="headline">
          <Trans i18nKey="tnx_status" />
        </Typography>
        <TnxList items={tnxList} />
      </Main>
      <AppFooter />
    </Container>
  )
}

export default TnxStatus;