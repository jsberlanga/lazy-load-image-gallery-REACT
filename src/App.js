import React, { useState } from "react";
import UserContext from "./context/UserContext";

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

const App = () => {
  const [user, setUser] = useState(false);
  const handleLogin = () => setUser(true);
  const handleLogout = () => setUser(false);
  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </React.Suspense>
    </UserContext.Provider>
  );
};

export default App;
