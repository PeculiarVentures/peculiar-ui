import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{R as y}from"./index-OjgoNOWw.js";import{d as x,e as C,C as v,f as c,h as j}from"./utils-ur_GzcA6.js";import{T as n}from"./typography-be8ycqzM.js";import"./emotion-styled.browser.esm-jsqElTi7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./emotion-element-c39617d8.browser.esm-upVMHClS.js";const P={title:"Palette"},s=e=>{const{title:l,colors:r}=e;return o.jsxs("div",{className:"color_item_custom",children:[o.jsx("h3",{children:l}),o.jsx("ul",{className:"color_item_custom-list",children:Object.keys(r).map(t=>o.jsxs("li",{className:"color_item_custom-item",children:[o.jsx("div",{className:"color_item_custom-bg",style:{background:r[t]}}),o.jsxs("div",{children:[o.jsx(n,{children:t}),o.jsx(n,{color:"gray-9",variant:"b3",children:r[t]})]})]},t))})]})},a=()=>{const[e,l]=y.useState(x.primary),r=C("custom",e),t=new v(e).getContrastRatio(c.color.white),_=g=>{l(g.target.value)};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"color_item_custom-picker",children:[o.jsx("input",{type:"color",defaultValue:e,onChange:_,className:"color_item_custom-picker_input"}),o.jsx("h4",{style:{color:t>j?c.color.white:c.color.black},className:"color_item_custom-picker_text",children:e})]}),o.jsx(s,{title:"Result",colors:r})]})};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`props => {
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [color, setColor] = React.useState<string>(colorsTheme.primary.primary);
  const palette = colorsTheme.generateColorPalette('custom', color);
  const contrastColorRatio = new Color(color).getContrastRatio(defaultThemeLight.color.white);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };
  return <>
      <div className="color_item_custom-picker">
        <input type="color" defaultValue={color} onChange={handleChange} className="color_item_custom-picker_input" />
        <h4 style={{
        color: contrastColorRatio > contrastThreshold ? defaultThemeLight.color.white : defaultThemeLight.color.black
      }} className="color_item_custom-picker_text">
          {color}
        </h4>
      </div>
      <ColorItemExample title="Result" colors={palette} />
    </>;
}`,...(d=(h=a.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const w=["ColorItemExample","PalettePlayground"];export{s as ColorItemExample,a as PalettePlayground,w as __namedExportsOrder,P as default};
