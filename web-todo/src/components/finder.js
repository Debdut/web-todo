export default function Finder ({ categories = [], selected, starred, input, update }) {

  return (
    <div>
      <p class='text-8xl my-10'>📝</p>
      <h1 class='text-4xl font-bold inline'> Web Todo </h1>
      <span class='text-4xl hidden md:inline'>|</span>
      <h2 class='text-xl hidden md:inline'> Create Todo's on Webpages <a class='text-blue-400' href=''>See How →</a></h2>

      <div class='float-right space-x-2 md:space-x-4'>
        <Star starred={starred} update={e => update(!starred, 'starred')} />
        <Category categories={categories} update={e => update(e.target.value, 'selected')} />
      </div>

      <input class='my-10 w-full border rounded-full p-2 px-4 text-xl' type='text' placeholder='Search' value={input} onKeyPress={e => update(e.target.value, 'input')} />
    </div>
  )
}

function Category ({ categories, selected, update }) {

  return (
    <select class='p-2 pr-10 border-2 border-blue-400' onChange={update} value={selected}>
      <option default>Category</option>
      {categories.map((category, index) => <option value={index} key={index}>{category}</option>)}
    </select>
  )
}

function Star ({ starred, update }) {
  const star = starred ? '⭐' : '✩'
  return <span class='text-2xl cursor-pointer' onClick={update}>{star}</span>
}