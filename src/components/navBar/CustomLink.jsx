import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ text, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const { pathname } = resolved;

  return (
    <Link
      className={pathname === to && match && "active_link"}
      to={to}
      {...props}
    >
      {text}
    </Link>
  );
}

export default CustomLink;
