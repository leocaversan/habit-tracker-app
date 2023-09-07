import React, { useState } from 'react';
import UserContext, { User, UserContextType } from './auth';

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
        setAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        setAuthenticated(false);
    };

    const userContextValue: UserContextType = {
        authenticated,
        user,
        login,
        logout
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
