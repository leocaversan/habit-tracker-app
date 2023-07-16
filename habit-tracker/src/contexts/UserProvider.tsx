import React, { useState } from 'react';
import UserContext, { User, UserContextType } from './auth';

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => {
        // Lógica para autenticar o usuário
        setUser(userData);
    };

    // const logout = () => {
    //     // Lógica para fazer logout do usuário
    //     setUser(null);
    // };

    const userContextValue: UserContextType = {
        user,
        login,
        // logout
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
