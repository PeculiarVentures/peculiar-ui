import{R as s}from"./index-OjgoNOWw.js";const p=(t,...e)=>typeof t=="function"?t(...e):t;function V(t){const{value:e,defaultValue:c,onChange:n,shouldUpdate:a}=t,[r,f]=s.useState(c),u=e!==void 0,o=u?e:r,i=s.useCallback(d=>{const l=p(d,o);a&&!a(o,l)||(u||f(l),n&&n(l))},[u,n,o,a]);return[o,i]}export{V as u};