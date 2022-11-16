import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);
  //   console.log(profiles);
  //   console.log(profiles);
  return (
    <div>
      <div className="container">
        <div className="row">
          {profiles.map((profile) => (
            <Profile key={profile.id} profile={profile}></Profile>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
