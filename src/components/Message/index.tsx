import * as React from 'react';
import './_style.scss'

type Props = {
  children?: React.ReactNode,
  value?: any
};
const Message = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}`;

  const shortHand = (): string => {
    const name: Array<string> = props.value.name.split(' ');
    return name.map(text => text.charAt(0)).join('')
  };
  return (
    <div className='message' ref={ref}>
      {props.children && props.children}
      {props.value && (
          <div className="message-holder">
            <div className="message-avatar">{shortHand()}</div>
            <div className="message-text-holder">
              <p className="message-sender">{`${props.value.name} ${currentTime}`}</p>
              <p className="message-text">{props.value.message}</p>
            </div>
          </div>
      )}
    </div>
  )
});

export { Message };
