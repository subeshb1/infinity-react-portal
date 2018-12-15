import * as React from "react";
import * as ReactDOM from "react-dom";
import "../portal.css";
export interface PortalProps {
  root: Node;
}
export interface CreatePortalTypes {
  /** Element ID */
  (id: String): React.ComponentClass;
  /** DOM Element */
  (element: Element): React.ComponentClass;
  /** No Params */
  (): React.ComponentClass;
}
let portalCounter = 0;
export const createPortal: CreatePortalTypes = (first?: any) => {
  let root: Element;

  if (typeof first === "string" && document.getElementById(first) !== null) {
    root = document.getElementById(first) as Element;
  } else if (first instanceof Element) {
    root = first;
  } else {
    const div = document.createElement("div");
    div.id = first || "iui-portal-" + portalCounter++;
    document.body.appendChild(div);
    root = div;
  }

  return class Portal extends React.Component<PortalProps, any> {
    portalElement: Element;
    constructor(props: PortalProps) {
      super(props);
    }

    /**
     * componentDidMount
     */
    componentDidMount() {}
    componentWillUnmount() {}
    public render() {
      return ReactDOM.createPortal(this.props.children || "", root);
    }
  };
};
