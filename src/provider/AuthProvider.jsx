import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(null);
	const auth = getAuth(app);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			// ...
		});
		return () => {
			return unsubscribe();
		};
	}, []);
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	const authInfo = {
		user,
		loading,
		login,
		createUser,
		logOut,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
