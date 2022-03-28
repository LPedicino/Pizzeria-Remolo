import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SSRProvider from 'react-bootstrap/SSRProvider';

ReactDOM.render(
	<SSRProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</SSRProvider>,
	document.getElementById('root')
);
