import * as React from 'react';
import { Image } from 'components/Image';
import { final1Img, final2Img } from 'assets/img';

function Final1Screen() {
  return (
    <Image src={final1Img} />
  );
}

function Final2Screen() {
  return (
    <Image src={final2Img} />
  );
}

export { Final1Screen, Final2Screen }
