import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-pByjoP3I.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{n as a,t as o}from"./typography-CZKLJsuI.js";import{S as s,f as c,i as l,l as u,n as d,p as f,r as p,x as m}from"./iframe-qdV8xUs0.js";var h=n({ColorItemExample:()=>y,PalettePlaygroundExample:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x;function S(){return(S=t((()=>{g=e(r()),s(),a(),l(),c(),d(),_=i(),v={title:`Palette`},y=e=>{let{title:t,colors:n}=e;return(0,_.jsxs)(`div`,{className:`color_item_custom`,children:[(0,_.jsx)(`h3`,{children:t}),(0,_.jsx)(`ul`,{className:`color_item_custom-list`,children:Object.keys(n).map(e=>(0,_.jsxs)(`li`,{className:`color_item_custom-item`,children:[(0,_.jsx)(`div`,{className:`color_item_custom-bg`,style:{background:n[e]}}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(o,{children:e}),(0,_.jsx)(o,{color:`gray-9`,variant:`b3`,children:n[e]})]})]},e))})]})},b=()=>{let[e,t]=g.useState(f.primary),n=u(`custom`,e),r=new m(e).getContrastRatio(p.color.white);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`color_item_custom-picker`,children:[(0,_.jsx)(`input`,{type:`color`,defaultValue:e,className:`color_item_custom-picker_input`,onChange:e=>{t(e.target.value)}}),(0,_.jsx)(`h4`,{style:{color:r>2?p.color.white:p.color.black},className:`color_item_custom-picker_text`,children:e})]}),(0,_.jsx)(y,{title:`Result`,colors:n})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`props => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`ColorItemExample`,`PalettePlaygroundExample`]})))()}export{h as i,b as n,S as r,y as t};