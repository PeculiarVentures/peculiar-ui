import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as i}from"./index-vwMA7Q38.js";import{useMDXComponents as t}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-RvVjL8mU.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function r(o){const n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Installation"}),`
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
