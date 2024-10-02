import React, { createContext, useContext } from'react';

const ThemeContext = createContext();

function Context() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Thème : {theme}</p>
    </div>
  );
}

export default Context;