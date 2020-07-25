import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

// SL - Session List
// ML - Music List
// PL - Player

interface ContainerProps {
  isPlaying: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;

  grid-template-columns: 80px auto;
  grid-template-rows: auto ${(props) => (props.isPlaying ? 130 : 0)}px;

  grid-template-areas:
    'SL ML'
    'SL PL';

  height: 100vh;

  @media (max-width: 800px) {
    grid-template-areas:
      'ML ML'
      'PL PL';
  }
`;

export const Content = styled.div`
  grid-area: ML;
  padding: 20px 50px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${darken(0.07, '#312e38')};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${darken(0.03, '#312e38')};
    border-radius: 5px;
  }
`;

export const Title = styled.h1``;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: calc(100vw - 100px - 80px);

  margin-top: 40px;
`;

export const Artists = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 100px - 80px);

  margin-top: 40px;
`;

export const Albums = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 100px - 80px);

  margin-top: 40px;
`;

export const List = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 8px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${darken(0.07, '#312e38')};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${darken(0.03, '#312e38')};
    border-radius: 5px;
  }
`;

export const Card = styled(Link)`
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  height: 300px;
  border: 0;
  background: transparent;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #312e38;
    opacity: 0.7;

    img {
      transform: scale(1.03);
    }

    strong {
      color: #fff;
      font-size: 18px;
    }
  }

  & + a {
    margin-left: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.2s;
  }

  strong {
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s;
  }
`;
