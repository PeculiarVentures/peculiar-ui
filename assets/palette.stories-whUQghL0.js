import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{T as t}from"./typography-sImAKTC0.js";import"./index-OjgoNOWw.js";import"./emotion-styled.browser.esm-jsqElTi7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./emotion-element-c39617d8.browser.esm-upVMHClS.js";const h={title:"Palette"},r=i=>{const{title:m,colors:e}=i;return o.jsxs("div",{className:"color_item_custom",children:[o.jsx("h3",{children:m}),o.jsx("ul",{className:"color_item_custom-list",children:Object.keys(e).map(s=>o.jsxs("li",{className:"color_item_custom-item",children:[o.jsx("div",{className:"color_item_custom-bg",style:{background:e[s]}}),o.jsxs("div",{children:[o.jsx(t,{children:s}),o.jsx(t,{color:"gray-9",variant:"b3",children:e[s]})]})]},s))})]})};var c,l,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`props => {
  const {
    title,
    colors
  } = props;
  return <div className="color_item_custom">
      <h3>
        {title}
      </h3>
      <ul className="color_item_custom-list">
        {Object.keys(colors).map(key => <li key={key} className="color_item_custom-item">
            <div className="color_item_custom-bg" style={{
          background: colors[key]
        }} />
            <div>
              <Typography>
                {key}
              </Typography>
              <Typography color="gray-9" variant="b3">
                {colors[key]}
              </Typography>
            </div>
          </li>)}
      </ul>
    </div>;
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const x=["ColorItemExample"];export{r as ColorItemExample,x as __namedExportsOrder,h as default};
