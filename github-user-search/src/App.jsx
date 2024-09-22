import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetchGitHubUser(username);
      setUserData(response.data);
      setError('');
    } catch (error) {
      setError('User not found or an error occurred');
      setUserData(null);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="App">
      <h1>GitHub User Search</h1>
      {/* Search and display components will go here */}
    </div>
      <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
