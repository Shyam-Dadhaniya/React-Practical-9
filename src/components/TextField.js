import React from "react";

const TextField = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.name} className="my-2">
          {props.label}
        </label>
        
        <input
          type={props.type}
          name={props.name}
          className={`form-control ${props.touched && props.error && "border border-danger"}`}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        {props.touched && props.error && (
          <div className="error">{props.error}</div>
        )}
      </div>
    </>
  );
};

export default TextField;
