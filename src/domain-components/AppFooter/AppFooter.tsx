import styled from 'styled-components';
import React from 'react';
import Typography from '../../components/Typography';

const Container = styled.footer`
  padding: 0 32px;
  margin: 32px 0 24px;
`;

function AppFooter() {
  return (
    <Container>
      <Typography variant="headline" align="center">
        Footer
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        Something here to give the footer a purpose!
      </Typography>

      <Typography variant="caption" align="center">
        Copyright © Your Website 2020.
      </Typography>
    </Container>
  )
}

export default AppFooter;