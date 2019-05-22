import * as React from 'react';
import './_style.scss'

type Props = {
  children?: React.ReactNode,
  value?: string
};
const Message = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}`
  return (
    <div className='message' ref={ref}>
      {props.children && props.children}
      {props.value && (
          <div className="message-holder">
            <div className="message-avatar">KM</div>
            <div className="message-text-holder">
              <p className="message-sender">Karl Markovich {currentTime}</p>
              <p className="message-text">{props.value}</p>
            </div>
          </div>
      )}
    </div>
  )
});

export { Message };
