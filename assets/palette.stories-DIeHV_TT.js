import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-BTu_umhU.js";import{t as r}from"./jsx-runtime-BCDDjCIb.js";import{n as i,t as a}from"./Typography-BHxg4wHo.js";import{A as o,_ as s,k as c,t as l,x as u}from"./foundations-BbsVMvwK.js";import{c as d,o as f,s as p}from"./iframe-CJojsV8R.js";var m,h,g,_,v,y,b=e((()=>{m=t(n()),c(),a(),d(),l(),f(),h=r(),g={title:`Palette`},_=e=>{let{title:t,colors:n}=e;return(0,h.jsxs)(`div`,{className:`color_item_custom`,children:[(0,h.jsx)(`h3`,{children:t}),(0,h.jsx)(`ul`,{className:`color_item_custom-list`,children:Object.keys(n).map(e=>(0,h.jsxs)(`li`,{className:`color_item_custom-item`,children:[(0,h.jsx)(`div`,{className:`color_item_custom-bg`,style:{background:n[e]}}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(i,{children:e}),(0,h.jsx)(i,{color:`gray-9`,variant:`b3`,children:n[e]})]})]},e))})]})},v=()=>{let[e,t]=m.useState(u.primary),n=s(`custom`,e),r=new o(e).getContrastRatio(p.color.white);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`color_item_custom-picker`,children:[(0,h.jsx)(`input`,{type:`color`,defaultValue:e,className:`color_item_custom-picker_input`,onChange:e=>{t(e.target.value)}}),(0,h.jsx)(`h4`,{style:{color:r>2?p.color.white:p.color.black},className:`color_item_custom-picker_text`,children:e})]}),(0,h.jsx)(_,{title:`Result`,colors:n})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`props => {
  const {
    title,
    colors
  } = props;
  return <div className="color_item_custom">
      <h3>{title}</h3>
      <ul className="color_item_custom-list">
        {Object.keys(colors).map(key => <li key={key} className="color_item_custom-item">
            <div className="color_item_custom-bg" style={{
          background: colors[key]
        }} />
            <div>
              <Typography>{key}</Typography>
              <Typography color="gray-9" variant="b3">
                {colors[key]}
              </Typography>
            </div>
          </li>)}
      </ul>
    </div>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`ColorItemExample`,`PalettePlaygroundExample`]}));b();export{_ as ColorItemExample,v as PalettePlaygroundExample,y as __namedExportsOrder,g as default,b as t};