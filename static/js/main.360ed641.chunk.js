(window["webpackJsonpspy-code"]=window["webpackJsonpspy-code"]||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),_parser__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12);function Title(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",null,"Spy Code!")}var CodeForm=function(_){function e(_){var t;return Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),(t=Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).call(this,_))).keyDown=t.keyDown.bind(Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t}return Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(e,_),Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"keyDown",value:function(_){9!==_.keyCode&&9!==_.which||this.tabKey(_)}},{key:"tabKey",value:function(_){_.preventDefault();var e=document.getElementById("code"),t=e.selectionStart,n=e.selectionEnd,r=e.value;e.value=r.substring(0,t)+"\t"+r.substring(n),e.selectionEnd=t+1}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form",{onSubmit:this.props.handleSubmit},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea",{name:"code",id:"code",value:this.props.code,onChange:this.props.handleChange,onKeyDown:this.keyDown,rows:"20",cols:"40",wrap:"hard",autoComplete:"off",autoFocus:!0}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"submit",value:"submit"}))}}]),e}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),App=function(_React$Component2){function App(){var _;return Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this))).state={code:"function add(a) { \n\tlet b = 1;\n\tfor (let i=0; i<5; i++) {\n\t\tb++;\n\t}\n\tif (b===6) {\n\t\t b = 1;\n\t}\n\treturn a + b;\n}\n\nadd(1);"},_.handleChange=_.handleChange.bind(Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.handleSubmit=_.handleSubmit.bind(Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_}return Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_React$Component2),Object(_Users_pfuufy_Documents_programming_react_spy_code_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleChange",value:function(_){this.setState({code:_.target.value})}},{key:"handleSubmit",value:function handleSubmit(e){e.preventDefault();var functionObjects=Object(_parser__WEBPACK_IMPORTED_MODULE_8__.a)(this.state.code);console.log(eval(functionObjects))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title,null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CodeForm,{code:this.state.code,handleSubmit:this.handleSubmit,handleChange:this.handleChange}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=App},12:function(_,e,t){"use strict";t.d(e,"a",(function(){return o}));var n=t(13);function r(_){for(var e=function(_){var e,t=_.init.declarations[0].init.value,n=_.test.right.value,r=_.test.operator;try{e=_.update.right.value}catch(o){e=1}var a=0;return">"===r?(t=-t,n=-n):">="===r?(t=-t,n=-n,a=1):"<="===r&&(a=1),Math.floor((n-t)/e)+a}(_),t=0;t<e;t++)console.log("for loop iteration: ".concat(t+1))}function a(_){switch(_.type){case"IfStatement":console.log("if statement");break;case"ReturnStatement":console.log("return statement");break;case"ForStatement":r(_);break;case"VariableDeclaration":!function(_){_.declarations[0].init.value,console.log("variable declaration")}(_);break;case"ExpressionStatement":!function(_){console.log("expression statement")}(_);break;case"WhileStatement":!function(_){console.log("while statement")}(_);break;default:return console.log("unknown node type"),_}}function o(_){return Object(n.parse)(_).program.body[0].body.body.forEach((function(_,e,t){t[e]=a(_)})),_}},14:function(_,e,t){_.exports=t(37)},19:function(_,e,t){},20:function(_,e,t){},37:function(_,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),a=t(10),o=t.n(a),s=(t(19),t(11));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.360ed641.chunk.js.map