import * as React from 'react';

type Props = {
  children?: React.ReactNode,
  value?: string
};
const Message = ({ children, value }: Props) => {
  return (
    <div className='message'>
      {children && children}
      {value && <div className="text">{value}</div>}
    </div>
  )
}

export { Message };
