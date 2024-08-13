// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '16px', color: 'gray' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
  