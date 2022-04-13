export const fetchData = async () => {
  const url = "https://remolo-back.herokuapp.com/api/productos";

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
