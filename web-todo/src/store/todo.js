import Fuse from 'fuse.js'

const todos = [
  { 
    id: 1,
    title: 'File Bankruptcy at Upsolve',
    link: 'https://upsolve.org',
    selector: '',
    text: '',
    done: false,
    createdAt: '',
  },
  { 
    id: 2,
    title: 'Apply Job @usefluent',
    link: 'https://www.notion.so/Founding-Engineer-480e95c5a99649f4b0e0210eeb8c6600',
    selector: '',
    text: '',
    done: false,
    createdAt: '',
  },
  { 
    id: 3,
    title: 'Finish the Devtools Pro Prototype design',
    link: 'https://www.dropbox.com/debdut/devtools-pro',
    selector: '',
    text: '',
    done: false,
    createdAt: '',
  },
  { 
    id: 4,
    title: 'Approach Pieter Levels for Devtools Pro @levelsio',
    link: 'https://twitter.com/levelsio',
    selector: '',
    text: '',
    done: false,
    createdAt: '',
  },
]

const fuse = new Fuse (todos, {
  keys: [ 'title', 'link', 'text' ]
})

export default fuse