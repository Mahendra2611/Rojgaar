// hooks/useFetchData.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiCall } from '../utils/apiCall';
import { toggleLoader } from '../redux/loaderSlice';
import { ToastContainer ,toast} from 'react-toastify';

const useFetchData = (url, successAction) => {
    console.log("fetch data called")
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect")
    const fetchData = async () => {
      try {
        dispatch(toggleLoader(true));
        const data = await apiCall(url);
        console.log(data)
        dispatch(successAction(data.jobs));
      } catch (error) {
        toast.error(error)
        console.error(error);
      } finally {
        dispatch(toggleLoader(false));
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default useFetchData;
