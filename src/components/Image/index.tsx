import * as React from 'react';
import './_style.scss';

type Props = {
  src: string
}

function Image({ src }: Props) {
  return (
    <div className="full-screen-img">
      <img src={src} />
    </div>
  );
}

export { Image }
