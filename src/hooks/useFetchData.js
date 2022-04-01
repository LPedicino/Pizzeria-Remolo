import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchData().then((data) => {
    // console.log(data)
      setState({
        data: data,
        loading: false,
      })
    }
    );
  }, []);

  return state; // { data: [], loading: true }
};

export default useFetchData;
