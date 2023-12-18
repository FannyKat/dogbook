import React, { useState, useEffect } from 'react'
import { UserProfile } from './UserProfile';

function UsersList() {
  const [data, setData] = useState<any[]>([]);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [profile, setProfile] = useState<any[]>([]);
  
  const url = "http://localhost:4000/users";

  const fetchUsers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.message))
  }

  useEffect(() => {
    fetchUsers();
  }, [])


  if (isUserProfile) {
    return <UserProfile props={profile} goBack={() => setIsUserProfile(false)} />
  };

  
  return (
    <div className="App">
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              key={index}
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
              onClick={() => {
                setIsUserProfile(true)
                setProfile(dataObj);
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default UsersList