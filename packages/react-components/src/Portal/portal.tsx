import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEnhancedEffect } from '../hooks';

interface BaseProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
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
