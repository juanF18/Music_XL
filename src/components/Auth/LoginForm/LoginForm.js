import React from "react";
import { Button } from "semantic-ui-react";

export function LoginForm(props) {
  const { openRegister, goBack } = props;
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>Login Form</h1>
      <Button primary onClick={openRegister}>
        Register
      </Button>
      <Button secondary onClick={goBack}>
        Back
      </Button>
    </div>
  );
}
