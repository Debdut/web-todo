import { Checkbox, Select, Star } from './base'

export default function Finder ({ categories = [], selected, starred, done, input, update }) {

  return (
    <div>
      <p class='text-8xl my-10'>📝</p>
      <h1 class='text-4xl font-bold inline'> Web Todo </h1>
      <span class='text-4xl hidden md:inline'>|</span>
      <h2 class='text-xl hidden md:inline'> Create Todo's on Webpages <a class='text-blue-400' href=''>See How →</a></h2>

      <div class='float-right space-x-2 md:space-x-4'>
        <Star on={starred} update={(val) => update(val, 'starred')} />

        <Checkbox on={done} update={(val) => update(val, 'done')} />

        <Select options={categories} update={e => update(e.target.value, 'selected')} value={selected} placeholder='Category' />
      </div>

      <input class='my-10 w-full border rounded-full p-2 px-4 text-xl' type='text' placeholder='Search' value={input} onKeyPress={e => update(e.target.value, 'input')} />
    </div>
  )
}