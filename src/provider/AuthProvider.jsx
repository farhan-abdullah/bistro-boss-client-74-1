import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null);
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const auth = getAuth(app);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			//get and set token
			if (currentUser) {
				axios
					.post('http://localhost:5000/jwt', { email: currentUser.email })
					.then((data) => {
						localStorage.setItem('access-token', data.data.token);
					});
			} else {
				localStorage.removeItem('access-token');
			}
			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, []);
	const provider = new GoogleAuthProvider();
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const authInfo = {
		user,
		loading,
		login,
		createUser,
		logOut,
		updateUserProfile,
		googleSignIn,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
