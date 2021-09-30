import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
