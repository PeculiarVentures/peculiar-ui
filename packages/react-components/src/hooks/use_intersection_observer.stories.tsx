import React from 'react';
import { useIntersectionObserver } from './index';

const meta = {
  title: 'Hooks/useIntersectionObserver',
  component: useIntersectionObserver,
};

export default meta;

const Section = (props: { title: string }) => {
  const { title } = props;
  const [refIntersecting, { isIntersecting }] = useIntersectionObserver();

  console.log(`Render Section ${title}`, { isIntersecting });

  return (
    <div
      ref={refIntersecting}
      style={{
        height: '20vh',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
      }}
    >
      <div style={{ margin: 'auto' }}>
        {title}
      </div>
    </div>
  );
};

export const DemoExample = () => (
  Array.from({ length: 5 }).map((_, index) => (
    <Section
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      title={`${index + 1}`}
    />
  ))
);
