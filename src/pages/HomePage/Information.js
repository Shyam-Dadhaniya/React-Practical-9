import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAction } from '../../store/user-slice';
const Information = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userAction.logout());
  };
  return (
    <>
    <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{user.phone}</h6>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-4">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default Information