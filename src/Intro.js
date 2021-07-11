import React, { useState } from 'react';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble';

const texts = [
  'Software Engineer',
  'Coder',
  'Programmer',
  'Developer',
  'Designer'
];

const Intro = () => {
  const [pause, setPause] = useState(false)

  return (
    <>
      <div className='Intro'>
        <span className='Intro__blinker'></span>
        <TextScramble
          texts={texts}
          letterSpeed={5}
          nextLetterSpeed={100}
          pauseTime={1500}
          paused={pause}
        />
      </div>
    </>
  )
}

export default Intro;
