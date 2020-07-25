import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background: ${(props) => (props.isHome ? '#312e38' : '#7d7886')};

  position: relative;
  cursor: pointer;

  > img {
    width: 48px;
    height: 48px;
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background: ${(props) => (props.isHome ? '#7d7886' : '#312e38')};
  }
`;
