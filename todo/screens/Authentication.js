import React from 'react';
import './Authentication.css';
import {Link} from "react-router-dom";

export const AuthenticationMode = Object.freeze({
    Login: 'Login',
    Register: 'Register'
});

export default function Authentication({authenticationMode}) {
    return (
        <div>
            <h3>{authenticationMode === authenticationMode.Login ? 'Sign in' : 'Sign up'}</h3>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                <button>{authenticationMode === AuthenticationMode.Login ? 'Login' : 'Submit'}</button>
                </div>
                <div>
                    <Link>
                        {authenticationMode === AuthenticationMode.Login ? 'No account? Sign up' : 'Already signed up? Sign in'}
                    </Link>
                </div>
            </form>
        </div>
    );
}