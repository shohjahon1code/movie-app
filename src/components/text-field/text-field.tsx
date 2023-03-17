import React from "react";
import { TextFieldProps } from "./text-field.props";
import { ErrorMessage, FieldHookConfig, useField } from "formik";

const TextField = ({ ...props }: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="inline-block w-full">
      <label
        className={`inline-block w-full ${
          meta.touched && meta.error && "border-red-500 border-2"
        }`}
        htmlFor="text"
      >
        <input className="input" {...props} {...field} />
      </label>
      <ErrorMessage name={field.name} />
    </div>
  );
};

export default TextField;
