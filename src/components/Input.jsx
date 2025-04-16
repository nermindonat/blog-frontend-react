import React from "react";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  const error = touched[field.name] && errors[field.name];
  const showRequiredError =
    props.required && touched[field.name] && !field.value && !error;

  return (
    <div className={`mb-4 ${props.className}`}>
      {props.label && (
        <label
          htmlFor={field.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={`block w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      {showRequiredError && (
        <p className="text-xs text-red-600">Bu alan zorunludur</p>
      )}
    </div>
  );
};

export default Input;
