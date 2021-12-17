import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [rotateDots, setRotateDots] = useState(false);
  const [delOpt, setDelOpt] = useState(null);
  const [editOpt, setEditOpt] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        setSidebar,
        rotateDots,
        setRotateDots,
        delOpt,
        setDelOpt,
        editOpt,
        setEditOpt,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
