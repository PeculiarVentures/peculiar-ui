import{j as t}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as e}from"./index-o2KxC7bF.js";import{M as i,C as a}from"./index-CQtnV9Qr.js";import{DemoExample as r}from"./use_toast.stories-DGWEopuz.js";import"./index-C-7etoUd.js";import"./iframe-WsVDjk04.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./fade-DHl67KFq.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-RLbX08wD.js";import"./alert-8HcUzJaJ.js";import"./typography-BPMyf_HL.js";import"./icon_button-CdSb54e1.js";import"./tooltip-C7UNRx-7.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./use_controllable-DXs9Mygf.js";import"./popper-O6M8mNeX.js";import"./usePopper-CdO4NS3w.js";import"./portal-B1al-bvw.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-BBNYSgcD.js";import"./button-CmosBqk6.js";import"./button_base-B56E0i7F.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-CIirikiM.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";import"./circular_progress-ChCybyi7.js";function s(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
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
