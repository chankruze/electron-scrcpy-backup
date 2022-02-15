/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 11:11:40 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const ErrorDiv: React.FC = ({ children }) => {
  return (
    <div>
      <p className="absolute text-red-500 right-0">{children}</p>
    </div>
  );
};

export default ErrorDiv;
