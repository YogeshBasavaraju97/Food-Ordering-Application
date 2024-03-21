import { item_URL } from './constant';
import { useEffect, useState } from 'react';

const useRestoMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(item_URL + resId);
    const resInfo = await data.json();
    console.log(resInfo);
    setResInfo(resInfo.data);
  };
  return resInfo;
};

export default useRestoMenu;
