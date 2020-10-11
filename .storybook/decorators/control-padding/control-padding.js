import React from "react";

import "./control-padding.css";

const ControlPadding = ({ story, padding = "16px" }) => (
  <div className="ControlPadding" style={{ padding }}>
    {story()}
  </div>
);

export default ControlPadding;