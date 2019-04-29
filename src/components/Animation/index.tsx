import * as React from 'react';
import { BossAnimation, SecretaryAnimation } from 'assets/animation/';

type Props = {
  src: string;
}

const Animation = (
  { src }: Props
) => {
  if (!src) {
    return null;
  }

  return (
    <video
      src={src}
      loop
      autoPlay
      className="animation"
    />
  )
};

Animation.types = {
  boss: BossAnimation,
  secretary: SecretaryAnimation
};

export { Animation };
