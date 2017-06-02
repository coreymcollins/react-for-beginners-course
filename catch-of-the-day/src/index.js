// Import React first!
import React from 'react';

// Just import one method (render) from react-dom instead of the entire thing.
import { render } from 'react-dom';

// Import our CSS.
import './css/style.css';

// Import our StorePicker component.
import StorePicker from './components/StorePicker';

import App from './components/App';

// Render a component.
// <What does it render>, <what does it append to?>
render( <App/>, document.querySelector( '#main' ) );