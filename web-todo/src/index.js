import { Component } from 'preact'

import Nav from './components/nav'
import Finder from './components/finder'
import List from './components/list'

import Todos from './store/todo'

import './style'

class App extends Component {
	state = {
		categories: [ 'Movie', 'Job' , 'Reading' ],
		selected: null,
		starred: false,
		done: false,
		input: ''
	}

	update = (value, key) => {
		this.setState(state => {
			state[key] = value
			return state
		})
	}

	getTodos = () => {
		const { input } = this.state
		return Todos()
	}

	render ({}, { categories, starred, input, selected, done }) {
		const todos = this.getTodos()

		return (
			<div class='mx-auto p-4'>
				<Nav/>
				<div class='max-w-screen-lg mx-auto mt-20'>
					<Finder categories={categories} starred={starred} input={input} selected={selected} done={done} update={this.update} />
					<List todos={todos}/>
				</div>
			</div>
		)
	}
}

export default App
