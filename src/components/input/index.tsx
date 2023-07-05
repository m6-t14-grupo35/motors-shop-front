import { InputProps } from "@/interfaces/componentProps.interface";
import React, { forwardRef, Ref } from "react";
import { text } from "stream/consumers";

const Input = forwardRef(
  function InputComponent(
    { id, label, children, required, error, value, defaultValue, type = 'text', ...rest }: InputProps,
    ref: Ref<HTMLInputElement>
  ) {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="whitespace-nowrap block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
            {error && " *"}
          </label>
        )}
        <div>
          <input
            id={id}
            type={type}
            autoComplete={id}
            required={required}
            ref={ref}
            {...rest}
            defaultValue={defaultValue}
            className="appearance-none pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2"
          />
          {children}
          {error && (
            <p className="text-sm/5 text-red-700">{error}</p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
