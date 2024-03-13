import React from 'react';
import emojipedia from '../data/emojipedia';
import Emoji from './Emoji';

function EmojiSet() {
  return (
    <dl className='dictionary'>
      {emojipedia.map((emoji, index) => (
        <Emoji 
          key={index}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
      ))}
    </dl>
  );
}

export default EmojiSet;
