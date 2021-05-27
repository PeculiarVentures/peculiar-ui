(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{334:function(module){module.exports=JSON.parse('{"name":"@peculiar/react-components","private":false,"version":"0.0.1","author":"PeculiarVentures Team","description":"A simple and customizable component library to build faster, beautiful, and more accessible React applications.","keywords":["react","react-component"],"main":"dist/cjs/index.js","module":"dist/esm/index.js","esnext":"dist/esnext/index.js","typings":"dist/types/index.d.ts","files":["dist/"],"repository":{"type":"git","url":"https://github.com/PeculiarVentures/peculiar-ui.git","directory":"packages/react-components"},"scripts":{"dev":"start-storybook -p 3000 -s ./.storybook/static","prebuild":"yarn clean","build":"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"build-storybook -o public -s ./.storybook/static","clean":"rimraf public dist themes","test:unit":"jest --passWithNoTests --watchAll","test:unit:coverage":"yarn test:unit --coverage --watchAll=false","check:types":"tsc --noEmit"},"peerDependencies":{"react":"^17.0.1","react-dom":"^17.0.1"},"dependencies":{"@emotion/css":"^11.1.3","@peculiar/color":"^0.0.1","@popperjs/core":"^2.9.2","@types/react-transition-group":"^4.4.1","focus-trap":"^6.4.0","react-popper":"^2.2.5","react-transition-group":"^4.4.1"},"devDependencies":{"@storybook/addon-a11y":"^6.2.7","@storybook/addon-actions":"^6.2.7","@storybook/addon-controls":"^6.2.7","@storybook/addon-docs":"^6.2.7","@storybook/addon-viewport":"^6.2.7","@storybook/react":"^6.2.7","@storybook/theming":"^6.2.7","@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.7","@testing-library/user-event":"^13.1.9","@types/jest":"^26.0.23","@types/react":"^17.0.3","@types/react-dom":"^17.0.3","awesome-typescript-loader":"^5.2.1","jest":"^26.6.3","jest-watch-typeahead":"^0.6.3","react":"^17.0.1","react-docgen-typescript":"^1.22.0","react-dom":"^17.0.1","rimraf":"^3.0.2","storybook-addon-performance":"^0.15.2","ts-jest":"^26.5.6","typescript":"^4.2.4"},"publishConfig":{"access":"public"},"engines":{"node":">=12.x"},"license":"MIT"}')},524:function(module,exports,__webpack_require__){__webpack_require__(525),__webpack_require__(680),__webpack_require__(936),__webpack_require__(941),__webpack_require__(940),__webpack_require__(937),__webpack_require__(939),__webpack_require__(938),__webpack_require__(904),module.exports=__webpack_require__(935)},592:function(module,exports){},680:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(9),__webpack_require__(24);var _storybook_addons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(89),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(136),_package_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(334),theme=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.a)({base:"light",brandTitle:"".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.name," v").concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.version)});_storybook_addons__WEBPACK_IMPORTED_MODULE_2__.c.setConfig({isFullscreen:!1,showPanel:!0,panelPosition:"bottom",isToolshown:!0,theme:theme})},935:function(module,exports,__webpack_require__){"use strict";__webpack_require__(39).addons.setConfig({refs:{}})}},[[524,2,3]]]);