import * as React from "react";
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
export declare const createPortal: CreatePortalTypes;
