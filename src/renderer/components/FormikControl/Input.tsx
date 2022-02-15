/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 11:11:30 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Field, ErrorMessage } from 'formik';
import ErrorDiv from './ErrorDiv';

export interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  notRounded?: string;
  [rest: string]: unknown;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  notRounded,
  ...rest
}) => {
  return (
    <div className="relative w-full flex flex-col">
      {label && (
        <label htmlFor={name} className="text-lg font-medium">
          {label}
        </label>
      )}
      <Field name={name} id={name} {...rest}>
        {({ field }: any) => (
          <input
            type="text"
            {...field}
            className={`my-1 px-3 py-2 w-full 
                        border-2 border-transparent focus:outline-none 
                        focus:shadow-outline focus:border-blue-400
                        bg-gray-700 ${notRounded || 'rounded'}
                        text-lg`}
            placeholder={placeholder || label}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorDiv} />
    </div>
  );
};

export default Input;
