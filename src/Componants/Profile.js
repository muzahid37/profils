import React from "react";
import {
  AiFillDelete,
  AiOutlineEdit,
  AiOutlineGlobal,
  AiOutlineHeart,
  AiOutlineMail,
  AiTwotoneHeart,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../Componants/Style.css";

const Profile = ({ profile }) => {
  const { name, email, address, website } = profile;
  //   console.log(name);
  //   console.log(email);
  //   console.log(address.zipcode);
  //   console.log(website);
  //   console.log(profile);
  return (
    <>
      {/* <h2>prdfknmf</h2> */}

      <div className="card-group col-lg-4 col-md-6 col-sm-12 mt-1">
        <div className="card">
          {/* <img src={image} className='card-img-top' alt="" /> */}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-dark item-description">
              <span>
                <AiOutlineMail />
              </span>
              {email}
            </p>
            <p className="card-text text-dark item-description">
              <span>
                <BsTelephone />
              </span>
              {address.zipcode}
            </p>
            <p className="card-text text-dark item-description">
              <span>
                <AiOutlineGlobal />
              </span>
              {website}
            </p>
          </div>
          <div className="CardHandelar">
            <ul>
              <li>
                <AiOutlineHeart />
              </li>
              <li>
                <AiOutlineEdit />
              </li>
              <li>
                <AiFillDelete />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
