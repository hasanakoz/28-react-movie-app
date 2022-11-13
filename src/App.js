import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import AuthContext from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
