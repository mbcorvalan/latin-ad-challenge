import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthProvider.jsx';
import { ProductProvider } from './context/ProductProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
