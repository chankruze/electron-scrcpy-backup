/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 10:12:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from 'react';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-800 text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
