// src/context/UserProvider.js
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export default function UserProvider({ children }) {
    const userFromSessionStorage = sessionStorage.getItem('user');
    const [user, setUser] = useState(userFromSessionStorage ? JSON.parse(userFromSessionStorage) : { email: '', password: '' });

    const signUp = async () => {
        const json = JSON.stringify(user);
        const headers = { headers: { 'Content-Type': 'application/json' } };
        try {
            const response = await axios.post(url + '/user/register', json, headers);
            setUser(response.data);
            sessionStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error("Sign Up Error:", error);
        }
    }

    const signIn = async () => {
        const json = JSON.stringify(user);
        const headers = { headers: { 'Content-Type': 'application/json' } };
        try {
            const response = await axios.post(url + '/user/login', json, headers);
            setUser(response.data);
            sessionStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error("Sign In Error:", error);
        }
    }

    const logOut = () => {
        setUser({ email: '', password: '' });
        sessionStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{ user, setUser, signUp, signIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
}