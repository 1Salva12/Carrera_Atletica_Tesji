const URL_API = "http://localhost:3001";
export const getUsuarios = async () => {
  const res = await fetch(`${URL_API}/usuarios`);
  const data = await res.json();
  return data;
};
