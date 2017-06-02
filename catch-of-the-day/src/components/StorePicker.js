// Import React first!
import React from 'react';

// Import other goodies.
import { getFunName } from '../helpers';

// Create a component.
class StorePicker extends React.Component {

	// One way to setup this being available to our custom methods.
	// constructor() {
	// 	super();
		// Do this for every method you need to bind to this.
	// 	this.goToStore = this.goToStore.bind( this );
	// }

	// Create the method triggered by submitting the form.
	goToStore( event ) {

		// Stop that dang ole default behavior.
		event.preventDefault();

		// Grab the text from the box.
		const storeId = this.storeInput.value;

		// Go to the URL for the store value in the input.
		this.context.router.transitionTo( `/store/${storeId}`);
	}

	// Create our render method.
	render() {
		// I can still use a comment like normal here.
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind( this )}>
				{ /* But I need to get freaky deaky when commenting in JSX.  Don't put comments at the top level of a return.  They'll break! */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

// Set contextTypes for our picker.
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

// Export this so it can be used elsewhere.
export default StorePicker;