// Import React first!
import React from 'react';

// Create a component.
class StorePicker extends React.Component {

	// Create our render method.
	render() {
		// I can still use a comment like normal here.
		return (
			<form className="form-selector">
				{ /* But I need to get freaky deaky when commenting in JSX.  Don't put comments at the top level of a return.  They'll break! */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

// Export this so it can be used elsewhere.
export default StorePicker;