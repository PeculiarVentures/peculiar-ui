import{j as t}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as e}from"./index-o2KxC7bF.js";import{M as i,C as a}from"./index-DTJhzM0F.js";import{DemoExample as r}from"./use_toast.stories-DYinR0nB.js";import"./index-C-7etoUd.js";import"./iframe-CnY0Wu3v.js";import"./index-DVfLDD12.js";import"./index-CtyGc8zC.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";import"./emotion-styled.browser.esm-4GIPFSzo.js";import"./emotion-element-c39617d8.browser.esm-Dg8JpHKD.js";import"./fade-DJA5vkWX.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-BJIFcN-9.js";import"./alert-DntCsIne.js";import"./typography-CKxPqBqf.js";import"./icon_button-Bx2Kz1NA.js";import"./tooltip-I5KERSZS.js";import"./emotion-react.browser.esm-DYtMi64m.js";import"./use_controllable-DXs9Mygf.js";import"./popper-CrKow5hf.js";import"./usePopper-DVVtgb3V.js";import"./portal-alX9cN9q.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-C8DasW3x.js";import"./button-BW4VTGL6.js";import"./button_base-TMPd0JGl.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-bh-6Sisg.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";import"./circular_progress-B__Ag0Nt.js";function s(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
`,t.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useToast"})," hook is a React hook that allows components to easily display toast notifications. It provides a simple interface to add toast notifications with customizable messages, variants, and options like enabling/disabling icons and making the toast closable."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Warning"}),": Make sure to include ",t.jsx(o.code,{children:"ToastProvider"})," at the root of your component tree to enable toast notifications throughout your application."]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { useToast, ToastProvider } from '@peculiar/react-components';

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
          Show
          {' '}
          {status}
          {' '}
          toast
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
`,t.jsx(o.h2,{id:"demo",children:"Demo"}),`
`,t.jsx(a,{of:r})]})}function O(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(s,{...n})}):s(n)}export{O as default};
