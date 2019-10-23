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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Portal_1 = require("./Portal");
var Context = React.createContext({
    notifications: [],
    push: function () { }
});
var fixed = document.createElement("div");
fixed.id = "iui-notification-portal";
fixed.className = "iui-fixed iui-fixed--bottom iui-fixed--right";
var container = document.createElement("div");
container.className = "iui-fixed__container";
document.body.prepend(fixed);
fixed.appendChild(container);
var Portal = Portal_1.createPortal(container);
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            notifications: [{ type: "Hello", content: "Hello" }]
        };
        _this.push = function (notification) {
            _this.setState(function (_a) {
                var notifications = _a.notifications;
                return {
                    notifications: notifications.concat([notification])
                };
            });
        };
        return _this;
    }
    Provider.prototype.render = function () {
        return (React.createElement(Context.Provider, { value: {
                notifications: this.state.notifications,
                push: this.push
            } },
            this.props.children,
            this.state.notifications
                .map(function (x) { return x; })
                .reverse()
                .map(function (x, i) {
                return (React.createElement(Portal, { key: i },
                    React.createElement("div", { className: "iui-fixed__toast" }, x.content)));
            })));
    };
    return Provider;
}(React.Component));
exports.Provider = Provider;
exports.Consumer = Context.Consumer;
exports.withNotifications = function (Element) {
    return function NotificationConsumer(props) {
        return (React.createElement(exports.Consumer, null, function (_a) {
            var push = _a.push, notifications = _a.notifications;
            return (React.createElement(Element, __assign({}, __assign({}, props, { push: push, notifications: notifications }))));
        }));
    };
};
//# sourceMappingURL=notifications-context.js.map