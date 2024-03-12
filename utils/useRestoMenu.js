import { item_URL } from './constant';

const useRestoMenu = (resId) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch({ item_URL } + { resId });
    const resInfo = await data.json();
    console.log(jsonData);

    return resInfo.data;
  };
};
