import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEnhancedEffect } from '../utils';

type BaseProps = {
  children?: React.ReactNode;
  container?: Element | (() => Element | null) | null;
};

function getContainer(container: BaseProps['container']) {
  return typeof container === 'function' ? container() : container;
}

export const Portal: React.FC<BaseProps> = (props) => {
  const { children, container } = props;
  const [mountNode, setMountNode] = React.useState(null);

  useEnhancedEffect(() => {
    setMountNode(getContainer(container) || document.body);
  }, [container]);

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

Portal.displayName = 'Portal';
