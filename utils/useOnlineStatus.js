import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setNetworkStatus(false);
      console.log('false');
    });

    window.addEventListener('online', () => {
      setNetworkStatus(true);
      console.log('true');
    });
  }, []);

  return networkStatus;
};

export default useOnlineStatus;
