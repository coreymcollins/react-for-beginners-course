// Import React first!
import React from 'react';

// Just import one method (render) from react-dom instead of the entire thing.
import { render } from 'react-dom';

// Import React Router requirements.
import { BrowserRouter, Match, Miss } from 'react-router';

// Import our CSS.
import './css/style.css';

// Import StorePicker component.
import StorePicker from './components/StorePicker';

// Import App.
import App from './components/App';

// Import Not Found.
import NotFound from './components/NotFound';

// Build out our Routing functionality.
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

// Render the Root.
// <What does it render>, <what does it append to?>
render( <Root/>, document.querySelector( '#main' ) );