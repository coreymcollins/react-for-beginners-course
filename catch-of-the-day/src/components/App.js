import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes.js';

class App extends React.Component {

	constructor() {
		super();

		this.addFish = this.addFish.bind( this );
		this.loadSamples = this.loadSamples.bind( this );

		// Get the initial state.
		this.state = {
			fishes: {},
			order: {},
		};
	}

	addFish( fish ) {
		// Update our state.
		// This copies our current state.
		const fishes = {...this.state.fishes};

		// Add our new fish.
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;

		// Set the state.
		this.setState({ fishes });
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		)
	}
}

export default App;