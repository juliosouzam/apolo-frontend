import styled from 'styled-components';

export const Container = styled.div`
  grid-area: PL;

  background: #7159c1;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 940px) {
    padding: 0 15px;
  }
`;

export const MusicDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  @media (max-width: 940px) {
    img {
      width: 50px;
      height: 50px;
    }

    > div {
      font-size: 12px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 400px;
  }

  button {
    border: 0;
    background: transparent;

    & + button {
      margin-left: 20px;
    }
  }

  @media (max-width: 940px) {
    input {
      display: none;
    }

    button + button {
      margin-left: 10px;
    }
  }
`;

export const Volumes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 0;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    margin-left: 10px;
  }

  @media (max-width: 940px) {
    display: none;
  }
`;
