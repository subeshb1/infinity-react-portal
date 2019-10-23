"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("../portal.css");
var portalCounter = 0;
exports.createPortal = function (first) {
    var root;
    if (typeof first === "string" && document.getElementById(first) !== null) {
        root = document.getElementById(first);
    }
    else if (first instanceof Element) {
        root = first;
    }
    else {
        var div = document.createElement("div");
        div.id = first || "iui-portal-" + portalCounter++;
        document.body.appendChild(div);
        root = div;
    }
    return /** @class */ (function (_super) {
        __extends(Portal, _super);
        function Portal(props) {
            return _super.call(this, props) || this;
        }
        /**
         * componentDidMount
         */
        Portal.prototype.componentDidMount = function () { };
        Portal.prototype.componentWillUnmount = function () { };
        Portal.prototype.render = function () {
            return ReactDOM.createPortal(this.props.children || "", root);
        };
        return Portal;
    }(React.Component));
};
//# sourceMappingURL=index.js.map