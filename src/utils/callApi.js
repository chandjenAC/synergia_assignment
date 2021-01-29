import axios from "axios";

export const get = async (url) => {
  let res;
  async function callApi() {
    await axios
      .get(url)
      .then((response) => {
        res = response.data;
      })
      .catch((error) => {
        res = error?.response?.data;
        console.log(error);
      });
  }
  await callApi();
  return res;
};
