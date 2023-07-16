import { createContext, useContext } from 'react';

export interface User {
    user: {
        username: string,
        password: string,
      },
      token: string,
  // Adicione outras propriedades do usuário, se necessário
}

export interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
//   logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    return {
      user: null,
      login: () => {},
    };
    
  }
  return context;
};

export default UserContext;
