import { useState } from 'react'
import SearchForm from './components/form/SearchForm'
import UserProfile from './components/user/UserProfile'
const App = () => {
  const [username, setUserName] = useState('quincyLarson')
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm username={username} setUserName={setUserName} />
      <UserProfile userName={username} />
    </main>
  )
}
export default App
