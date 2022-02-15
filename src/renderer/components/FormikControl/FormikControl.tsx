/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 11:10:41 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Input, { InputProps } from './Input';

interface FormikControlProps {
  control: string;
  [rest: string]: any;
}

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...(rest as InputProps)} />;

    default:
      return null;
  }
};

export default FormikControl;
