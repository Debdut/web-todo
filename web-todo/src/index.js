import { Component } from 'preact'

import Nav from './components/nav'
import Finder from './components/finder'
import List from './components/list'

import './style'

class App extends Component {
	state = {
		categories: [ 'Movie', 'Job' , 'Reading' ],
		selected: null,
		starred: false,
		input: ''
	}

	update = (value, key) => {
		this.setState(state => {
			state[key] = value
			return state
		})
	}

	render ({}, { categories, starred, input, selected }) {
		return (
			<div class='mx-auto p-4'>
				<Nav/>
				<div class='max-w-screen-lg mx-auto mt-20 space-y-10'>
					<Finder categories={categories} starred={starred} input={input} selected={selected} update={this.update} />
					<List/>
				</div>
			</div>
		)
	}
}

export default App
