import React from "react";

export default function ConditionalComponent({ children, condition = true }) {
    if (children !== undefined && condition) {
        return <React.Fragment>{children}</React.Fragment>;
    }
    return <React.Fragment></React.Fragment>;
}
