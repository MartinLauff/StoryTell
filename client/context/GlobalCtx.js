import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [rotateDots, setRotateDots] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        setSidebar,
        rotateDots,
        setRotateDots,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
