import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [rotateDots, setRotateDots] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        setSidebar,
        rotateDots,
        setRotateDots,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
