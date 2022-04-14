import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="col-sm-4 bg-c-lite-green user-profile">
        <div className="card-block text-center text-white">
          <div className="m-b-25">
            <img src={user.file} className="img-radius" alt="User-Profile" />
          </div>
          <h6 className="f-w-600">{user.name}</h6>
          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
        </div>
      </div>
    </>
  );
};

export default Profile;
