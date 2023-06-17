import { createContext, useState } from "react";

interface ContextProps {
  login: () => void;
  logout: () => void;
  isLogged: boolean;
}

const defaultValues: ContextProps = {
  login: () => {},
  logout: () => {},
  isLogged: false,
};

// 1. create context
export const UserContext = createContext<ContextProps>(defaultValues);

interface Props {
  children: JSX.Element;
}

// 2. create provider
export function UserProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <UserContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
