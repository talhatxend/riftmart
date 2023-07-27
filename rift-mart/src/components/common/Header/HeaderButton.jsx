import React from "react";

import Row from "../Row";
import { Link } from "react-router-dom";

const HeaderButton = ({ title, Icon, url = "/" }) => {
  return (
    <Link to={url}>
      <Row className="ml-[20px]">
        {/* {icon}  */}
        {/* ? why this line instead. */}
        <Icon />
        <p className="text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px]">
          {title}
        </p>
      </Row>
    </Link>
  );
};

export default HeaderButton;
