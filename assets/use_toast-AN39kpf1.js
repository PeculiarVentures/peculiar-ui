import{j as t}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as e}from"./index-C2WH5l5l.js";import{ae as i,af as a}from"./index-B1hq2CfJ.js";import{DemoExample as r}from"./use_toast.stories-Ddmjcwx4.js";import"./index-Wp2u197Z.js";import"./iframe-DTojuAtu.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./emotion-styled.browser.esm-C7XpMTT7.js";import"./emotion-element-c39617d8.browser.esm-BF_KrTCf.js";import"./fade-Cuc5mZJ8.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-CwNB1HnW.js";import"./alert-C1kNAF_B.js";import"./flex_container-Bp3t1ZPL.js";import"./typography-BiH-a7_Q.js";import"./icon_button-DlwfVxKb.js";import"./button-DFfWhVeX.js";import"./button_base-Cke40BWW.js";import"./tooltip-B4X_EBtw.js";import"./emotion-react.browser.esm-8Xjhr7rM.js";import"./box-Ckj1GiW5.js";import"./popper-B033xlU5.js";import"./usePopper-DrB3v0g8.js";import"./portal-BQAxhhmg.js";import"./use_enhanced_effect-C1-U52iU.js";import"./use_controllable-DRJrQW8S.js";import"./close_icon-CNZMa0ZK.js";import"./close_circle_icon-C2ZjPKy3.js";import"./warning_icon-BCyTww0l.js";import"./circular_progress-QyqZkcES.js";function s(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
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
