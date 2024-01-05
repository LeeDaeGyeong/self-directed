import axios from "axios";

export const getFetchData = async () => {
  const res = await axios.get("api/data");
  return res.data;
};
