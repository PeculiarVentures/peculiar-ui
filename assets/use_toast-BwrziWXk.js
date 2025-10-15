import{j as t}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as e}from"./index-o2KxC7bF.js";import{M as i,C as a}from"./index-DyAqIPDL.js";import{DemoExample as r}from"./use_toast.stories-Df94RNg2.js";import"./index-C-7etoUd.js";import"./iframe-BYHPBPv0.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./emotion-styled.browser.esm-D5cirWhA.js";import"./emotion-element-43c6fea0.browser.esm-BY9Huquz.js";import"./fade-DHl67KFq.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-RLbX08wD.js";import"./alert-DRFkO5oW.js";import"./typography-CX2mak6k.js";import"./icon_button-CjJTTcjM.js";import"./tooltip-Coc6yecg.js";import"./emotion-react.browser.esm-4GvqO_Dn.js";import"./use_controllable-DXs9Mygf.js";import"./popper-CZKyUyjx.js";import"./usePopper-CdO4NS3w.js";import"./portal-B1al-bvw.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-BnLF-nfb.js";import"./button-DKNSmEZd.js";import"./button_base-CYjMRpzX.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-Bs1E_qIl.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";import"./circular_progress-C2zFoG7h.js";function s(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
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
