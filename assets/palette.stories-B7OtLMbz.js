import{j as e}from"./jsx-runtime-xF634gn_.js";import{e as y}from"./index-C-7etoUd.js";import{d as x,e as C,C as v,f as c,h as j}from"./utils-B0NLhKM1.js";import{T as n}from"./typography-BPMyf_HL.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";const E={title:"Palette"},s=o=>{const{title:a,colors:r}=o;return e.jsxs("div",{className:"color_item_custom",children:[e.jsx("h3",{children:a}),e.jsx("ul",{className:"color_item_custom-list",children:Object.keys(r).map(t=>e.jsxs("li",{className:"color_item_custom-item",children:[e.jsx("div",{className:"color_item_custom-bg",style:{background:r[t]}}),e.jsxs("div",{children:[e.jsx(n,{children:t}),e.jsx(n,{color:"gray-9",variant:"b3",children:r[t]})]})]},t))})]})},l=()=>{const[o,a]=y.useState(x.primary),r=C("custom",o),t=new v(o).getContrastRatio(c.color.white),_=g=>{a(g.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"color_item_custom-picker",children:[e.jsx("input",{type:"color",defaultValue:o,className:"color_item_custom-picker_input",onChange:_}),e.jsx("h4",{style:{color:t>j?c.color.white:c.color.black},className:"color_item_custom-picker_text",children:o})]}),e.jsx(s,{title:"Result",colors:r})]})};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`props => {
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [color, setColor] = React.useState<string>(colorsTheme.primary.primary);
  const palette = colorsTheme.generateColorPalette('custom', color);
  const contrastColorRatio = new Color(color).getContrastRatio(defaultThemeLight.color.white);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };
  return <>
      <div className="color_item_custom-picker">
        <input type="color" defaultValue={color} className="color_item_custom-picker_input" onChange={handleChange} />
        <h4 style={{
        color: contrastColorRatio > contrastThreshold ? defaultThemeLight.color.white : defaultThemeLight.color.black
      }} className="color_item_custom-picker_text">
          {color}
        </h4>
      </div>
      <ColorItemExample title="Result" colors={palette} />
    </>;
}`,...(d=(h=l.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const P=["ColorItemExample","PalettePlaygroundExample"];export{s as ColorItemExample,l as PalettePlaygroundExample,P as __namedExportsOrder,E as default};
