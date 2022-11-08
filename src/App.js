import React from "react";
import AuthContext from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContext>
        <AppRouter />
      </AuthContext>
    </div>
  );
};

export default App;
