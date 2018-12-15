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
var react_dom_1 = require("react-dom");
require("../portal.css");
var div = document.createElement("div");
div.id = "portal";
document.body.prepend(div);
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * componentDidMount
     */
    Portal.prototype.componentDidMount = function () { };
    Portal.prototype.render = function () {
        return react_dom_1.default.createPortal(React.createElement("div", { className: "iui-fixed iui-fixed--bottom iui-fixed--right " },
            React.createElement("div", { className: "iui-fixed__container" },
                React.createElement("div", { className: "iui-fixed__toast" }, "Hello 1 Hello 1Hello 1Hello 1Hello 1Hello 1Hello 1Hello 1Hello 1Hello 1Hello 1"),
                React.createElement("div", { className: "iui-fixed__toast" }, "Hello 1"))), document.getElementById("portal"));
    };
    return Portal;
}(React.Component));
exports.default = Portal;
//# sourceMappingURL=index.js.map