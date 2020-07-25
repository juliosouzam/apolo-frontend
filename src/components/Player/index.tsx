import React, { useCallback, useState } from 'react';
import {
  MdReplay10,
  MdForward10,
  MdPauseCircleOutline,
  MdPlayCircleOutline,
  MdVolumeUp,
  MdVolumeOff,
} from 'react-icons/md';

import { Container, MusicDetails, Controls, Volumes } from './styles';

const Player: React.FC = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const toogleIsPlaying = useCallback(() => {
    setIsPlaying((prevState) => !prevState);
  }, []);

  const toogleIsPaused = useCallback(() => {
    setIsPaused((prevState) => !prevState);
  }, []);

  const toogleVolume = useCallback(() => {
    setCurrentVolume((prevState) => (prevState > 0 ? 0 : 1));
  }, []);

  return (
    <Container>
      <MusicDetails>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/The_Rembrandts.jpg"
          alt="music"
        />
        <div>
          <strong>{`I'll be there for you ${1}`}</strong>
          <span>The Rembrandts</span>
        </div>
      </MusicDetails>

      <Controls>
        <div>
          <button type="button">
            <MdReplay10 size={38} color="#fff" />
          </button>

          {isPaused ? (
            <button type="button" onClick={toogleIsPaused}>
              <MdPlayCircleOutline size={38} color="#fff" />
            </button>
          ) : (
            <button type="button" onClick={toogleIsPaused}>
              <MdPauseCircleOutline size={38} color="#fff" />
            </button>
          )}

          <button type="button">
            <MdForward10 size={38} color="#fff" />
          </button>
        </div>

        <input
          type="range"
          max={1}
          min={0}
          step={0.01}
          value={currentProgress}
          onChange={(e) => setCurrentProgress(Number(e.target.value))}
        />
      </Controls>

      <Volumes>
        {currentVolume === 0 ? (
          <button type="button" onClick={toogleVolume}>
            <MdVolumeOff size={24} color="#fff" />
          </button>
        ) : (
          <button type="button" onClick={toogleVolume}>
            <MdVolumeUp size={24} color="#fff" />
          </button>
        )}

        <input
          type="range"
          max={1}
          min={0}
          step={0.01}
          value={currentVolume}
          onChange={(e) => setCurrentVolume(Number(e.target.value))}
        />
      </Volumes>
    </Container>
  );
};

export default Player;
