/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 07:55:07 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from 'react';
import Layout from 'renderer/components/Layout';

export type DialogFileData = {
  /**
   * Did user cancel dialog?
   */
  cancelled: boolean;
  /**
   * Array of file paths that user selected
   */
  filePaths: string[];
};

const Home = () => {
  const [deviceId, setDeviceId] = useState('');

  const getHello = async () => {
    // Use IPC API to query Electron's main thread and run this method
    await window.electron.connect(deviceId);
  };

  return (
    <Layout>
      <div className="flex-1 flex gap-2 justify-center items-center">
        <div>
          <input
            type="text"
            placeholder="Device ID"
            className="p-2 outline-none text-black rounded-md"
            onChange={(e) => setDeviceId(e.target.value)}
            value={deviceId}
          />
        </div>
        <div>
          <button
            onClick={getHello}
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md capitalize"
          >
            connect
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
