import React from 'react'
import Signup from '../pages/SignUp/Signup'
import image from '../assets/img.png'
const SignUpContainer = () => {
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
        <Signup />
      </div>
      <div className="col-md-7">
        <img src={image} alt="img" />
      </div>
    </div>
  </div>
  )
}

export default SignUpContainer