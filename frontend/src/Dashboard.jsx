import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const userData = query.get('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photos[0].value} alt="Profile" />
      <p>Email: {user.emails[0].value}</p>
    </div>
  );
};

export default Dashboard;
