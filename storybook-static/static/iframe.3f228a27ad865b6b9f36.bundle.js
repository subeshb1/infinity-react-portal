(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),o=this&&this.__assign||function(){return(o=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var c=e(0),s=e(594),a=c.createContext({notifications:[],push:function(){}}),u=document.createElement("div");u.id="iui-notification-portal",u.className="iui-fixed iui-fixed--bottom iui-fixed--right";var f=document.createElement("div");f.className="iui-fixed__container",document.body.prepend(u),u.appendChild(f);var l=s.createPortal(f),p=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={notifications:[{type:"Hello",content:"Hello"}]},t.push=function(n){t.setState(function(t){return{notifications:t.notifications.concat([n])}})},t}return i(t,n),t.prototype.render=function(){return c.createElement(a.Provider,{value:{notifications:this.state.notifications,push:this.push}},this.props.children,this.state.notifications.map(function(n){return n}).reverse().map(function(n,t){return c.createElement(l,{key:t},c.createElement("div",{className:"iui-fixed__toast"},n.content))}))},t}(c.Component);t.Provider=p,t.Consumer=a.Consumer,t.withNotifications=function(n){return function(e){return c.createElement(t.Consumer,null,function(t){var r=t.push,i=t.notifications;return c.createElement(n,o({},o({},e,{push:r,notifications:i})))})}}},572:function(n,t,e){e(221),e(573),n.exports=e(574)},574:function(n,t,e){"use strict";e.r(t),function(n){var t=e(73),r=(e(602),e(587));Object(t.configure)(function(){e(604),r.keys().forEach(function(n){return r(n)})},n)}.call(this,e(163)(n))},587:function(n,t,e){var r={"./index.story.js":588,"./notification.story.js":601};function i(n){var t=o(n);return e(t)}function o(n){var t=r[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=587},588:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),r=e.n(t),i=e(73),o=(e(589),e(497)),c=e(220),s=e(498),a=e.n(s);Object(i.setAddon)(a.a),Object(i.addDecorator)(o.withKnobs);var u=Object(c.withNotifications)(function(n){var t=n.push,e=n.notifications;return r.a.createElement("button",{onClick:function(){return t({type:"sue",content:e.length})}},"Hello")});Object(i.storiesOf)("First",n).addWithJSX("First Story",function(){return r.a.createElement(c.Provider,null,"Subesh",r.a.createElement(u,null))})}.call(this,e(163)(n))},589:function(n,t){},594:function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),c=e(96);e(595);var s=0;t.createPortal=function(n){var t;if("string"==typeof n&&null!==document.getElementById(n))t=document.getElementById(n);else if(n instanceof Element)t=n;else{var e=document.createElement("div");e.id=n||"iui-portal-"+s++,document.body.appendChild(e),t=e}return function(n){function e(t){return n.call(this,t)||this}return i(e,n),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.render=function(){return c.createPortal(this.props.children||"",t)},e}(o.Component)}},595:function(n,t,e){var r=e(596);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(505)(r,i);r.locals&&(n.exports=r.locals)},596:function(n,t,e){(n.exports=e(504)(!1)).push([n.i,".iui-fixed {\r\n  position: fixed;\r\n  width: 100%;\r\n  display: flex;\r\n  z-index: 100;\r\n  justify-content: flex-start;\r\n  pointer-events: none;\r\n  top: 0;\r\n}\r\n.iui-fixed--bottom {\r\n  top: auto;\r\n  bottom: 0;\r\n}\r\n\r\n.iui-fixed--center {\r\n  justify-content: center;\r\n}\r\n.iui-fixed--right {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.iui-fixed__container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.iui-fixed__container {\r\n  pointer-events: all;\r\n  padding: 4px;\r\n  max-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  -ms-scroll-chaining: none;\r\n      overscroll-behavior: contain;\r\n}\r\n.iui-fixed__toast {\r\n  pointer-events: all;\r\n  max-width: 300px;\r\n  margin: 10px 0px;\r\n  background: white;\r\n  padding: 10px;\r\n  box-shadow: 0 0 6px grey;\r\n  border-radius: 10px;\r\n}\r\n",""])},601:function(n,t,e){"use strict";e.r(t),function(n){e(0);var t=e(73);e(497),e(220),e(498);Object(t.storiesOf)("Notification",n).add("Usage",function(){return"Hello"})}.call(this,e(163)(n))},602:function(n,t,e){var r=e(603);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(505)(r,i);r.locals&&(n.exports=r.locals)},603:function(n,t,e){(t=n.exports=e(504)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Poppins);",""]),t.push([n.i,'* {\r\n  font-family: "Poppins", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.center-slide {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.slide:nth-of-type(1n) .center-slide {\r\n  background: rgb(255, 151, 151);\r\n}\r\n.slide:nth-of-type(2n) .center-slide {\r\n  background: rgb(255, 210, 151);\r\n}\r\n.slide:nth-of-type(3n) .center-slide {\r\n  background: rgb(151, 193, 255);\r\n}\r\n.slide:nth-of-type(4n) .center-slide {\r\n  background: rgb(196, 151, 255);\r\n}\r\n',""])},604:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),r=e.n(t),i=e(73),o=e(571);e(635),e(21);Object(i.storiesOf)("Welcome",n).add("to Infinity React Transition",Object(o.withInfo)()(function(){return r.a.createElement("div",null,"Welcome")}))}.call(this,e(163)(n))},607:function(n,t,e){var r={"./nestedObjectAssign":506,"./nestedObjectAssign.js":506};function i(n){var t=o(n);return e(t)}function o(n){var t=r[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=607}},[[572,2,4]]]);
//# sourceMappingURL=iframe.3f228a27ad865b6b9f36.bundle.js.map