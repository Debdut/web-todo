import Nav from './components/nav'
import Finder from './components/finder'
import List from './components/list'

import './style'

export default function App() {
	return (
		<div class='mx-auto p-4'>
			<Nav/>
			<div class='max-w-screen-lg mx-auto mt-20 space-y-10'>
				<p class='text-8xl mb-10'>📝</p>
				<h1 class='text-4xl font-bold inline'> Web Todo </h1>
				<span class='text-4xl'>|</span>
				<h2 class='text-xl inline'> Create Todo's on Webpages <a class='text-blue-400' href=''>See How →</a></h2>
				<Finder/>
				<List/>
			</div>
		</div>
	)
}
