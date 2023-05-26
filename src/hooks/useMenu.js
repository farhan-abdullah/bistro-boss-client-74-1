import { useEffect, useState } from 'react';
import MenuItem from '../Shared/MenuItem/MenuItem';

export const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('menu.json')
			.then((res) => res.json())
			.then((data) => {
				setMenu(data);
				setLoading(false);
			});
	}, []);
	return [menu, loading];
};