import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const UnAuthenticatedApp = () => {
  const { handleLogin } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default UnAuthenticatedApp;
