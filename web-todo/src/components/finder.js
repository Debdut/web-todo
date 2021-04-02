export default function Finder ({ update, value }) {
  return <input class='w-full border rounded-full p-2 px-4 text-xl' type='text' placeholder='Search' value={value} onKeyPress={update} />
}