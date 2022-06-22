import React from "react";
const LabelWithValue = React.lazy(() => import("./labelWithValue"));
const Widget = React.lazy(() => import("./widget"));

export {
    LabelWithValue,
    Widget
}