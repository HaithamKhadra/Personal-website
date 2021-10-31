import React from "react";
import { Link } from "gatsby";

const GoBack = () => {
  const greaterThan = React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&gt;" },
  });
  return (
    <h1 className="go-back">
      <Link className="go-back__link" to="/">
        {greaterThan} Go To Home_Page
      </Link>
    </h1>
  );
};

export default GoBack;
