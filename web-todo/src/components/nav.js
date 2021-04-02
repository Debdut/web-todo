export default function Nav () {
  return (
    <nav>
      <a href='/'>📝 Web Todo</a>
      <div class='float-right text-blue-400 space-x-2 md:space-x-4'>
        <a class='no-underline hover:underline' href='#'>Twitter</a>
        <a class='no-underline hover:underline' href='#'>Extension</a>
        <a class='no-underline hover:underline' href='#'>FAQ</a>
        <a class='no-underline hover:underline' href='#'>Feedback</a>
      </div>
    </nav>
  )
}