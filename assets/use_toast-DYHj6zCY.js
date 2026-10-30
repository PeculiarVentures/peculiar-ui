import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,r as n,u as r}from"./blocks-BkbI2scT.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";import{n as s,t as c}from"./use_toast.stories-CG2CPQ7V.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Hooks/useToast`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`useToast`}),` hook is a React hook that allows components to easily display toast notifications. It provides a simple interface to add toast notifications with customizable messages, variants, and options like enabling/disabling icons and making the toast closable.`]}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Warning`}),`: Make sure to include `,(0,d.jsx)(t.code,{children:`ToastProvider`}),` at the root of your component tree to enable toast notifications throughout your application.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-jsx`,children:`import { useToast, ToastProvider } from '@peculiar/react-components';

const ToastStatusExample = () => {
  const { addToast, removeAllToasts } = useToast();
  const statuses = ['success', 'wrong', 'attention', 'pending'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        gap: 10,
      }}
    >
      {statuses.map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => {
            addToast({
              message: \`\${status} toast\`,
              variant: status,
              disableIcon: false,
              isClosable: true,
            });
          }}
        >
          Show {status} toast
        </button>
      ))}
      <button
        type="button"
        onClick={removeAllToasts}
      >
        Remove all toasts
      </button>
    </div>
  );
};

export const Demo = () => (
  <ToastProvider maxToasts={4}>
    <ToastStatusExample />
  </ToastProvider>
);
`})}),`
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(n,{of:c})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=i(),o(),t(),s()})))()}f();export{u as default};