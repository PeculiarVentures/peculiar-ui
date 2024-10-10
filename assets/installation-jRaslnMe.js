import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{M as i}from"./index-BEeeSBSB.js";import{useMDXComponents as t}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-WPkQfkz3.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";function r(o){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["To install ",e.jsx(n.code,{children:"@peculiar/react-components"}),` in your project, you will need to run the
following command using `,e.jsx(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"npm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i @peculiar/react-components
`})}),`
`,e.jsxs(n.p,{children:["If you prefer ",e.jsx(n.a,{href:"https://yarnpkg.com/en/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yarn"}),", use the following command instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @peculiar/react-components
`})}),`
`,e.jsxs(n.p,{children:["After installing, you need to set up the ThemeProvider at the root of your application. This can be either in your ",e.jsx(n.code,{children:"index.jsx"}),", ",e.jsx(n.code,{children:"index.tsx"})," or ",e.jsx(n.code,{children:"App.jsx"})," depending on the framework you use."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@peculiar/react-components';

function App() {
  return (
    <ThemeProvider>
      <Button>
        Action
      </Button>
    </ThemeProvider>
  );
}
`})})]})}function f(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{f as default};
