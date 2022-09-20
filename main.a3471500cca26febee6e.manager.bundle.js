(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(module){module.exports=JSON.parse('{"name":"@peculiar/react-components","private":false,"version":"0.0.1","author":"PeculiarVentures Team","description":"A simple and customizable component library to build faster, beautiful, and more accessible React applications.","keywords":["react","react-component"],"sideEffects":false,"main":"dist/cjs/index.js","module":"dist/esm/index.js","esnext":"dist/esnext/index.js","typings":"dist/types/index.d.ts","files":["dist/"],"repository":{"type":"git","url":"https://github.com/PeculiarVentures/peculiar-ui.git","directory":"packages/react-components"},"scripts":{"start":"start-storybook -p 3000 -s ./.storybook/static","prebuild":"yarn clean","build":"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"build-storybook -o public -s ./.storybook/static","clean":"rimraf public dist themes","test:unit":"jest --passWithNoTests --watchAll","test:unit:coverage":"yarn test:unit --coverage --watchAll=false","check:types":"tsc --noEmit"},"peerDependencies":{"@types/react":"^17.0.0","react":"^17.0.0","react-dom":"^17.0.0"},"dependencies":{"@emotion/core":"^10.1.1","@emotion/css":"^11.7.1","@peculiar/color":"^0.0.1","@popperjs/core":"^2.11.5","@types/flat":"^5.0.2","@types/react-transition-group":"^4.4.4","copy-to-clipboard":"^3.3.1","deepmerge":"^4.2.2","flat":"^5.0.2","focus-trap":"^6.7.3","nanoid":"^3.3.3","react-popper":"^2.2.5","react-transition-group":"^4.4.2"},"devDependencies":{"@storybook/addon-a11y":"^6.5.10","@storybook/addon-actions":"^6.5.10","@storybook/addon-controls":"^6.5.10","@storybook/addon-docs":"^6.5.10","@storybook/addon-viewport":"^6.5.10","@storybook/react":"^6.5.10","@storybook/theming":"^6.5.10","@testing-library/jest-dom":"^5.16.4","@testing-library/react":"^11.2.7","@testing-library/user-event":"^13.5.0","@types/jest":"^27.4.1","@types/react":"^17.0.44","@types/react-dom":"^17.0.15","awesome-typescript-loader":"^5.2.1","jest":"^27.5.1","jest-watch-typeahead":"^1.0.0","react":"^17.0.2","react-dom":"^17.0.2","rimraf":"^3.0.2","storybook-addon-performance":"^0.16.1","ts-jest":"^27.1.4","typescript":"^4.6.3"},"publishConfig":{"access":"public"},"engines":{"node":">=12.x"},"license":"MIT"}')},413:function(module,exports,__webpack_require__){__webpack_require__(414),__webpack_require__(580),__webpack_require__(791),__webpack_require__(793),__webpack_require__(792),__webpack_require__(789),__webpack_require__(790),module.exports=__webpack_require__(788)},483:function(module,exports){},580:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(18),__webpack_require__(19);var _storybook_addons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(78),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_package_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(273),theme=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.e)({base:"light",brandTitle:"".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.name," v").concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.version)});_storybook_addons__WEBPACK_IMPORTED_MODULE_2__.a.setConfig({isFullscreen:!1,showPanel:!0,panelPosition:"bottom",isToolshown:!0,theme:theme})}},[[413,3,4]]]);