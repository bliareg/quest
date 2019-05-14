import * as React from 'react';

type Props = {
  children?: React.ReactNode,
  value?: string
};
const Message = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className='message' ref={ref}>
      {props.children && props.children}
      {props.value && <div className="text">{props.value}</div>}
    </div>
  )
});

export { Message };
