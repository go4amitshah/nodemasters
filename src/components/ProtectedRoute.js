import React from "react";

export default function ProtectedRoute({ component: Component, ...rest }) {
  if (localStorage.getItem("token")) {
    return <Component {...rest} />;
  } else {
    return <div>ProtectedRoute</div>;
  }
}
