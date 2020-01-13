import React from 'react';
import styled from 'styled-components';
import loading from './loading.svg';

// sample for styling with Object
const Container = styled.div({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, .8)',
  zIndex: 2,
});

const Loading: React.FC = () => (
  <Container data-testid="loading">
    <img src={loading} alt="loading" />
  </Container>
);

export default Loading;
