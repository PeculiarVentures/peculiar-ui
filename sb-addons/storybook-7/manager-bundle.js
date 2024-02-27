try{
(()=>{var y=__STORYBOOK_ADDONS__,{addons:i,types:h,mockChannel:f}=__STORYBOOK_ADDONS__;var v=__STORYBOOK_THEMING__,{CacheProvider:j,ClassNames:T,Global:O,ThemeProvider:D,background:P,color:S,convert:w,create:r,createCache:C,createGlobal:B,createReset:N,css:R,darken:A,ensure:E,ignoreSsrWarning:G,isPropValid:I,jsx:K,keyframes:M,lighten:Y,styled:$,themes:V,typography:H,useTheme:L,withTheme:W}=__STORYBOOK_THEMING__;var e={name:"@peculiar/react-components",private:!1,version:"0.4.13",author:"PeculiarVentures Team",description:"A simple and customizable component library to build faster, beautiful, and more accessible React applications.",keywords:["react","react-component"],sideEffects:!1,main:"dist/cjs/index.js",module:"dist/esm/index.js",esnext:"dist/esnext/index.js",typings:"dist/types/index.d.ts",files:["dist/"],repository:{type:"git",url:"https://github.com/PeculiarVentures/peculiar-ui.git",directory:"packages/react-components"},scripts:{start:"storybook dev -p 3000",prebuild:"yarn clean",build:"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"storybook build -o public",clean:"rimraf public dist themes","test:unit":"jest --passWithNoTests --watchAll","test:unit:coverage":"yarn test:unit --coverage --watchAll=false","test:unit:updateSnapshot":"jest --updateSnapshot","check:types":"tsc --noEmit"},peerDependencies:{"@types/react":"^17.0.0 || ^18.0.0",react:"^17.0.0 || ^18.0.0","react-dom":"^17.0.0 || ^18.0.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},dependencies:{"@emotion/react":"^11.11.1","@emotion/styled":"^11.11.0","@peculiar/color":"^0.1.3","@popperjs/core":"^2.11.7","@types/flat":"^5.0.2","@types/react-transition-group":"^4.4.5","copy-to-clipboard":"^3.3.1",deepmerge:"^4.3.1",flat:"^5.0.2","focus-trap":"^7.4.0",nanoid:"^3.3.6","react-popper":"^2.3.0","react-transition-group":"^4.4.5"},devDependencies:{"@storybook/addon-essentials":"7.6.7","@storybook/react":"7.6.7","@storybook/react-vite":"7.6.7","@types/react":"^18.0.34","@types/react-dom":"^18.0.11","@vitejs/plugin-react-swc":"^3.5.0",react:"^18.2.0","react-dom":"^18.2.0",rimraf:"^3.0.2",storybook:"7.6.7","storybook-dark-mode":"^3.0.3",typescript:"^4.6.3",vite:"^5.0.8"},publishConfig:{access:"public"},engines:{node:">=12.x"},license:"MIT"};var a=r({base:"light",brandTitle:`${e.name} v${e.version}`}),Z=r({base:"dark",brandTitle:`${e.name} v${e.version}`,appPreviewBg:"#1B1C1D"});i.setConfig({isFullscreen:!1,showPanel:!0,panelPosition:"bottom",isToolshown:!0,theme:a,sidebar:{filters:{patterns:n=>!n.name.includes("Example")}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
