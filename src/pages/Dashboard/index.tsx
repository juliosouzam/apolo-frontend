import React from 'react';

import {
  Container,
  Content,
  Title,
  Categories,
  Artists,
  Albums,
  List,
  Card,
} from './styles';

import SessionSwitcher from '../../components/SessionSwitcher';
import Player from '../../components/Player';

const Dashboard: React.FC = () => {
  return (
    <Container isPlaying>
      <SessionSwitcher />

      <Content>
        <Artists>
          <Title>Artistas</Title>

          <List>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 1</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 2</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 3</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 4</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 5</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 6</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 7</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 8</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 9</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Artista 10</strong>
            </Card>
          </List>
        </Artists>

        <Albums>
          <Title>Albums</Title>

          <List>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Album 1</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Album 2</strong>
            </Card>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Album 3</strong>
            </Card>
          </List>
        </Albums>

        <Categories>
          <Title>Categorias</Title>

          <List>
            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 1</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 1</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 1</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 1</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 2</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 3</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 4</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 5</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 6</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 7</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 8</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 9</strong>
            </Card>

            <Card to="">
              <img
                src="https://media.gazetadopovo.com.br/vozes/2019/03/tree-736885-768x478-ffd49ed2.jpg"
                alt="gazetadopovo"
              />
              <strong>Categoria 10</strong>
            </Card>
          </List>
        </Categories>
      </Content>

      <Player />
    </Container>
  );
};

export default Dashboard;
