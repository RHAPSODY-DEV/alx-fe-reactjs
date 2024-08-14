import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const { name, email } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserProfile;
