import React from "react";
import CounteWithReduser from "./CounteWithReduser";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <CounteWithReduser />
    </div>
  );
};

App.defaultProps = {
  message: "Hello. defaultProps!",
};

export default App;
