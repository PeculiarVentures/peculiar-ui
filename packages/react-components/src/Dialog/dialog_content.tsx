import React from 'react';

export const DialogContent: React.FC = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};
