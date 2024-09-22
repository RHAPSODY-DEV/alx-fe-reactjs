import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError(null);
      try {
        await onSearch(username); // Call the parent function with the username
      } catch (err) {
        setError('Looks like we cant find the user');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.login}</h2>
    </div>
  );
};

export { Search, UserProfile };
