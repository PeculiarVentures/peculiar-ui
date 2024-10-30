import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{M as i,C as a}from"./index-K16J8gkh.js";import{DemoExample as r}from"./use_toast.stories-B2A8ZN-z.js";import{useMDXComponents as e}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-4cAxhttn.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";import"./emotion-styled.browser.esm-Cx145QRj.js";import"./emotion-element-c39617d8.browser.esm-DM69r4Qw.js";import"./fade-C0vUgQhK.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-D6EvYID4.js";import"./alert-DGVLtFcw.js";import"./flex_container-D1TdyU-p.js";import"./typography-CsxZaBy5.js";import"./icon_button-vwPuNdiy.js";import"./button-DN7WsDQ9.js";import"./button_base-ruFjRc3L.js";import"./tooltip-CC360KKX.js";import"./emotion-react.browser.esm-0eqfKSP6.js";import"./box-DqWWW0cx.js";import"./popper-D6f_HpFI.js";import"./usePopper-Q5pBTNBt.js";import"./portal-96hzBhmF.js";import"./use_enhanced_effect-Bwnr551i.js";import"./use_controllable-DUuBybTH.js";import"./close_icon-pwUgUdvH.js";import"./close_circle_icon-CXAzXn8S.js";import"./warning_icon-DwY-wTzM.js";import"./circular_progress-BhiYwC6M.js";function s(n){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
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
`,t.jsx(a,{of:r})]})}function W(n={}){const{wrapper:o}=Object.assign({},e(),n.components);return o?t.jsx(o,Object.assign({},n,{children:t.jsx(s,n)})):s(n)}export{W as default};
