import { useState, useEffect } from 'react';
import { fetchDisplays } from '../api/display';
import useAuth from '../hooks/useAuth';

const DashBoard = () => {
	const { token } = useAuth();
	const [displays, setDisplays] = useState([]);
	const [pageSize, setPageSize] = useState(10);
	const [offset, setOffset] = useState(0);
	const [name, setName] = useState('');
	const [type, setType] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchDisplays({
					pageSize,
					offset,
					name,
					type,
					token,
				}); // Pasa el token
				setDisplays(data);
			} catch (error) {
				console.error('Error fetching displays:', error);
			}
		};

		fetchData();
	}, [pageSize, offset, name, type, token]);
	return (
		<div>
			<h1>Dashboard</h1>
			{/* Aquí puedes agregar controles para ajustar pageSize, offset, name y type */}
			<ul>
				{displays.map(display => (
					<li key={display.id}>{display.name}</li>
				))}
			</ul>
		</div>
	);
};

export default DashBoard;
