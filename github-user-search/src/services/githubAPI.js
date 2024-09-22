import axios from 'axios';

// Get the GitHub API key from the environment variable
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const BASE_URL = 'https://api.github.com/';

// Function to fetch GitHub user data by username
export const fetchGitHubUser = (username) => {
  return axios.get(`${BASE_URL}users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
};
