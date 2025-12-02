import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as t}from"./index-o2KxC7bF.js";import{M as i}from"./index-CxZPOZuE.js";import"./index-C-7etoUd.js";import"./iframe-CfZ4OMFH.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(o){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["To install ",n.jsx(e.code,{children:"@peculiar/react-components"}),` in your project, you will need to run the
following command using `,n.jsx(e.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @peculiar/react-components
`})}),`
`,n.jsxs(e.p,{children:["If you prefer ",n.jsx(e.a,{href:"https://yarnpkg.com/en/",rel:"nofollow",children:"Yarn"}),", use the following command instead:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add @peculiar/react-components
`})}),`
`,n.jsxs(e.p,{children:["After installing, you need to set up the ThemeProvider at the root of your application. This can be either in your ",n.jsx(e.code,{children:"index.jsx"}),", ",n.jsx(e.code,{children:"index.tsx"})," or ",n.jsx(e.code,{children:"App.jsx"})," depending on the framework you use."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@peculiar/react-components';

function App() {
  return (
    <ThemeProvider>
      <Button>
        Action
      </Button>
    </ThemeProvider>
  );
}
`})})]})}function x(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{x as default};
