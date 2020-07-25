import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${darken(0.1, '#312e38')};
  padding: 10px;
  max-height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
