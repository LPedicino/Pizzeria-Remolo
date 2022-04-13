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
      });
    });
  }, []);


  const pizzasCategory = state.data.filter(
    (element) => element.categoria.nombre.toLowerCase() === "pizzas"
  );

  const postresCategory = state.data.filter(
    (element) => element.categoria.nombre.toLowerCase() === "postres"
  );

  const bebidasCategory = state.data.filter(
    (element) => element.categoria.nombre.toLowerCase() === "bebidas"
  );

  const empanadasCategory = state.data.filter(
    (element) => element.categoria.nombre.toLowerCase() === "empanadas"
  );

  const {loading} = state

  return {
    state,
    pizzasCategory,
    postresCategory,
    bebidasCategory,
    empanadasCategory,
    loading
  }; // { data: [], loading: true }
};

export default useFetchData;
