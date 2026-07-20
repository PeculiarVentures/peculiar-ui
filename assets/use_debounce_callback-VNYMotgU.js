import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{Bt as n,Nt as r,Wt as i,zt as a}from"./iframe-Bypf3L-5.js";import{t as o}from"./mdx-react-shim-BO142sDj.js";import{DemoExample as s,t as c}from"./use_debounce_callback.stories-BQePt9dz.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Hooks/useDebounceCallback`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsxs)(t.p,{children:[`React hook that makes passed function debounced, otherwise acts like `,(0,d.jsx)(t.code,{children:`useCallback`}),`.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-jsx`,children:`import { useDebounceCallback } from '@peculiar/react-components';

export const Demo = () => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue, 300);

  return (
    <>
      <p>
        Below state will update 300ms after last change.
      </p>
      <p>
        The input&apos;s value is:
        {' '}
        {value}
      </p>
      <input
        type="text"
        onChange={(event) => {
          setValueDebounced(event.target.value);
        }}
      />
    </>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(r,{of:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};