import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({ nombre: "", token: "" });
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        modalAuth: {
          open,
          setOpen,
        },
        tabIndex: {
          tabIndex,
          setTabIndex,
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
