import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  isAdd?: boolean;
}

const SessionButton: React.FC<Props> = ({ selected, isHome, isAdd }) => {
  return (
    <Button {...{ isHome }} className={selected ? 'active' : ''}>
      {isAdd ? (
        <MdAdd size={32} color="#fff" />
      ) : (
        <img
          alt="Rocketseat"
          src="https://ui-avatars.com/api/?background=312e38&color=fff&rounded=true"
        />
      )}
    </Button>
  );
};

export default SessionButton;
