import React from "react";

const Profile = ({ profile }) => {
  const { name, email, address, website } = profile;
  console.log(name);
  console.log(email);
  console.log(address.zipcode);
  console.log(website);
  //   console.log(profile);
  return (
    <>
      {/* <h2>prdfknmf</h2> */}

      <div className="card-group col-lg-4 col-md-6 col-sm-12 mt-1">
        <div className="card">
          {/* <img src={image} className='card-img-top' alt="" /> */}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-dark item-description">{email}</p>
            <p className="card-text text-dark item-description">
              {address.zipcode}
            </p>
            <p className="card-text text-dark item-description">{website}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
