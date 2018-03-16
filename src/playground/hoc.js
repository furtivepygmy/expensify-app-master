// Higher order component - a component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin ? <p>This is private info. Please don't share!</p> : ""}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAauthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAauthenticated={false} info="These are the details" />,
  document.getElementById("app")
);
