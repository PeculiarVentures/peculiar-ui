import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as i,C as a}from"./index-hvC27ksF.js";import{DemoExample as r}from"./use_toast.stories-c9GV-xIu.js";import{useMDXComponents as e}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-xyW4GGK5.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";import"./emotion-styled.browser.esm-jsqElTi7.js";import"./emotion-element-c39617d8.browser.esm-upVMHClS.js";import"./fade-6tFb4vlS.js";import"./use_merged_ref-U30BPCzO.js";import"./Transition-ZSq31Zhi.js";import"./alert-cCaI_edQ.js";import"./typography-mH1J_rqf.js";import"./icon_button-zK1X1I1g.js";import"./button-gyaUpdMj.js";import"./button_base-v55xmT6U.js";import"./tooltip-nP-5QEkJ.js";import"./emotion-react.browser.esm-8gWn0FvA.js";import"./box-lVn8r_X1.js";import"./popper-O5CHhymw.js";import"./usePopper--g5aU53a.js";import"./portal-GS-MOYPJ.js";import"./use_enhanced_effect-jDxBKzmp.js";import"./use_controllable-CY5ZQbVr.js";import"./close_icon-Bp311Jgy.js";import"./close_circle_icon-XpY_jUxJ.js";import"./warning_icon-iK8dORZk.js";import"./circular_progress-JxgBeK0r.js";function s(n){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Hooks/useToast"}),`
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
`,t.jsx(a,{of:r})]})}function U(n={}){const{wrapper:o}=Object.assign({},e(),n.components);return o?t.jsx(o,Object.assign({},n,{children:t.jsx(s,n)})):s(n)}export{U as default};
