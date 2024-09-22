import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

// Function to fetch user data from GitHub API
export const fetchUserData = (username) => {
  return axios.get(`${BASE_URL}${username}`);
};
