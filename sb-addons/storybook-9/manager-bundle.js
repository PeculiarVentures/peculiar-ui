try{
(()=>{var y=__STORYBOOK_API__,{ActiveTabs:h,Consumer:g,ManagerContext:f,Provider:k,RequestResponseError:v,addons:a,combineParameters:S,controlOrMetaKey:x,controlOrMetaSymbol:_,eventMatchesShortcut:T,eventToShortcut:j,experimental_MockUniversalStore:O,experimental_UniversalStore:P,experimental_requestResponse:A,experimental_useUniversalStore:M,isMacLike:C,isShortcutTaken:R,keyToSymbol:w,merge:D,mockChannel:B,optionOrAltSymbol:E,shortcutMatchesShortcut:G,shortcutToHumanString:I,types:K,useAddonState:N,useArgTypes:Y,useArgs:$,useChannel:H,useGlobalTypes:L,useGlobals:U,useParameter:V,useSharedState:q,useStoryPrepared:W,useStorybookApi:z,useStorybookState:F}=__STORYBOOK_API__;var ee=__STORYBOOK_THEMING__,{CacheProvider:te,ClassNames:se,Global:re,ThemeProvider:oe,background:ae,color:ie,convert:ne,create:o,createCache:ce,createGlobal:le,createReset:pe,css:ue,darken:de,ensure:me,ignoreSsrWarning:be,isPropValid:ye,jsx:he,keyframes:ge,lighten:fe,styled:ke,themes:ve,typography:Se,useTheme:xe,withTheme:_e}=__STORYBOOK_THEMING__;var e={name:"@peculiar/react-components",private:!1,version:"1.1.2",author:"PeculiarVentures Team",description:"A simple and customizable component library to build faster, beautiful, and more accessible React applications.",keywords:["react","react-component"],sideEffects:!1,main:"dist/cjs/index.js",module:"dist/esm/index.js",esnext:"dist/esnext/index.js",typings:"dist/types/index.d.ts",files:["dist/"],repository:{type:"git",url:"https://github.com/PeculiarVentures/peculiar-ui.git",directory:"packages/react-components"},scripts:{start:"storybook dev -p 3000",prebuild:"yarn clean",build:"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"storybook build -o public",clean:"rimraf public dist themes","test:unit":"jest --passWithNoTests --watchAll","test:unit:coverage":"yarn test:unit --coverage --watchAll=false","test:unit:updateSnapshot":"jest --updateSnapshot","check:types":"tsc --noEmit"},peerDependencies:{"@types/react":"^17.0.0 || ^18.0.0",react:"^17.0.0 || ^18.0.0","react-dom":"^17.0.0 || ^18.0.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},dependencies:{"@emotion/react":"^11.11.1","@emotion/styled":"^11.11.0","@peculiar/color":"^0.1.5","@popperjs/core":"^2.11.7","@types/flat":"^5.0.2","@types/react-transition-group":"^4.4.5",deepmerge:"^4.3.1",flat:"^5.0.2","focus-trap":"^7.5.4",nanoid:"^3.3.6","react-popper":"^2.3.0","react-transition-group":"^4.4.5"},devDependencies:{"@babel/preset-env":"7.26.9","@storybook/addon-essentials":"8.6.4","@storybook/react":"8.6.4","@storybook/react-vite":"8.6.4","@types/react":"^18.0.34","@types/react-dom":"^18.0.11","@vitejs/plugin-react-swc":"^3.8.0",react:"^18.2.0","react-dom":"^18.2.0",rimraf:"^3.0.2",storybook:"8.6.4","storybook-dark-mode":"^4.0.2",typescript:"5.1.6",vite:"^6.2.0"},publishConfig:{access:"public"},engines:{node:">=18.x"},license:"MIT"};var i=o({base:"light",brandTitle:`${e.name} v${e.version}`}),Re=o({base:"dark",brandTitle:`${e.name} v${e.version}`,appPreviewBg:"#1B1C1D"});a.setConfig({isFullscreen:!1,showPanel:!0,panelPosition:"bottom",isToolshown:!0,theme:i,sidebar:{filters:{patterns:n=>!n.name.includes("Example")}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
