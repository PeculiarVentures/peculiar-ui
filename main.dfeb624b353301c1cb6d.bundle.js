(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1166:function(module,exports,__webpack_require__){"use strict";__webpack_require__(55).addons.setConfig({refs:{}})},348:function(module){module.exports=JSON.parse('{"name":"@peculiar/react-components","private":false,"version":"0.0.1","author":"PeculiarVentures Team","description":"A simple and customizable component library to build faster, beautiful, and more accessible React applications.","keywords":["react","react-component"],"main":"dist/cjs/index.js","module":"dist/esm/index.js","esnext":"dist/esnext/index.js","typings":"dist/types/index.d.ts","files":["dist/"],"repository":{"type":"git","url":"https://github.com/PeculiarVentures/peculiar-ui.git","directory":"packages/react-components"},"scripts":{"dev":"start-storybook -p 3000","prebuild":"yarn clean","build":"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"build-storybook -o public","clean":"rimraf public dist themes"},"peerDependencies":{"react":"^17.0.1","react-dom":"^17.0.1"},"dependencies":{"@emotion/css":"^11.1.3","@peculiar/color":"^0.0.1","react-transition-group":"^4.4.1"},"devDependencies":{"@storybook/addon-a11y":"^6.1.21","@storybook/addon-actions":"^6.1.21","@storybook/addon-controls":"^6.1.21","@storybook/addon-docs":"^6.1.21","@storybook/addon-viewport":"^6.1.21","@storybook/react":"^6.1.21","@storybook/theming":"^6.1.21","@types/react":"^17.0.3","@types/react-dom":"^17.0.3","@types/react-transition-group":"^4.4.1","awesome-typescript-loader":"^5.2.1","react":"^17.0.1","react-docgen-typescript":"^1.21.0","react-dom":"^17.0.1","rimraf":"^3.0.2","storybook-addon-performance":"^0.14.0","typescript":"^4.1.3"},"publishConfig":{"access":"public"},"engines":{"node":">=12.x"},"license":"MIT"}')},521:function(module,exports,__webpack_require__){__webpack_require__(522),__webpack_require__(678),__webpack_require__(710),__webpack_require__(1108),__webpack_require__(1110),__webpack_require__(1113),__webpack_require__(1124),__webpack_require__(1127),__webpack_require__(1157),module.exports=__webpack_require__(1166)},589:function(module,exports){},678:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(20),__webpack_require__(14);var _storybook_addons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_package_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(348),theme=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.create)({base:"light",brandTitle:"".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.name," v").concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.version)});_storybook_addons__WEBPACK_IMPORTED_MODULE_2__.addons.setConfig({isFullscreen:!1,showPanel:!0,panelPosition:"bottom",isToolshown:!0,theme:theme})}},[[521,1,2]]]);