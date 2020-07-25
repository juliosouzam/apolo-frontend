import React from 'react';

import { Container, Separator } from './styles';
import SessionButton from '../SessionButton';

const SessionSwitcher: React.FC = () => {
  return (
    <Container>
      <SessionButton isHome isAdd />

      <Separator />

      <SessionButton />
      <SessionButton />
      <SessionButton />
      <SessionButton />
      <SessionButton />
      <SessionButton />
    </Container>
  );
};

export default SessionSwitcher;
